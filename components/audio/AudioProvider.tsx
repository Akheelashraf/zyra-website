"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode
} from "react";
import {
  AMBIENT_FADE_IN_DURATION,
  AMBIENT_FADE_OUT_DURATION,
  AMBIENT_VOLUME,
  AUDIO_PATHS,
  CLICK_COOLDOWN_MS,
  CLICK_DELAY_MS,
  CLICK_VOLUME,
  LOGO_VOLUME,
  MENU_VOLUME,
  SOUND_PREFERENCE_KEY,
  TOGGLE_VOLUME
} from "@/lib/audioConstants";

export type AudioController = {
  soundOn: boolean;
  setSoundOn: (on: boolean) => void;
  playClick: () => void;
  playToggleOn: () => void;
  playToggleOff: () => void;
  playMenu: () => void;
  playLogo: () => void;
  startAmbient: () => void;
  stopAmbient: () => void;
  onLoaderComplete: () => void;
  ambientStarted: boolean;
};

const AudioContext = createContext<AudioController | null>(null);

function getStoredSoundPreference(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const v = localStorage.getItem(SOUND_PREFERENCE_KEY);
    if (v === "0" || v === "false") return false;
    return true;
  } catch {
    return true;
  }
}

function setStoredSoundPreference(on: boolean) {
  try {
    localStorage.setItem(SOUND_PREFERENCE_KEY, on ? "1" : "0");
  } catch {
    /* ignore */
  }
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const [soundOn, setSoundOnState] = useState(true);
  const [ambientStarted, setAmbientStarted] = useState(false);
  const loaderCompleteRef = useRef(false);
  const userInteractedRef = useRef(false);
  const fadeRafRef = useRef<number | null>(null);
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastClickTimeRef = useRef(0);

  const ambientRef = useRef<HTMLAudioElement | null>(null);
  const clickRef = useRef<HTMLAudioElement | null>(null);
  const toggleOnRef = useRef<HTMLAudioElement | null>(null);
  const toggleOffRef = useRef<HTMLAudioElement | null>(null);
  const menuRef = useRef<HTMLAudioElement | null>(null);
  const logoRef = useRef<HTMLAudioElement | null>(null);

  const setSoundOn = useCallback((on: boolean) => {
    setSoundOnState(on);
    setStoredSoundPreference(on);
    const el = ambientRef.current;
    if (!el) return;
    if (!on) {
      if (fadeRafRef.current != null) {
        cancelAnimationFrame(fadeRafRef.current);
        fadeRafRef.current = null;
      }
      const startVol = el.volume;
      const start = performance.now();
      const fadeOut = () => {
        const t = (performance.now() - start) / 1000;
        if (t >= AMBIENT_FADE_OUT_DURATION) {
          el.volume = 0;
          el.pause();
          fadeRafRef.current = null;
          return;
        }
        el.volume = Math.max(0, startVol * (1 - t / AMBIENT_FADE_OUT_DURATION));
        fadeRafRef.current = requestAnimationFrame(fadeOut);
      };
      fadeRafRef.current = requestAnimationFrame(fadeOut);
    } else if (ambientStarted) {
      el.volume = AMBIENT_VOLUME;
      el.play().catch(() => {});
    }
  }, [ambientStarted]);

  useEffect(() => {
    setSoundOnState(getStoredSoundPreference());
  }, []);

  const playOneShot = useCallback(
    (ref: React.RefObject<HTMLAudioElement | null>, volume: number) => {
      if (!getStoredSoundPreference()) return;
      const el = ref.current;
      if (!el) return;
      el.currentTime = 0;
      el.volume = volume;
      el.play().catch(() => {});
    },
    []
  );

  const playClick = useCallback(() => {
    if (!getStoredSoundPreference()) return;
    const now = Date.now();
    if (now - lastClickTimeRef.current < CLICK_COOLDOWN_MS) return;
    lastClickTimeRef.current = now;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      clickTimeoutRef.current = null;
      const el = clickRef.current;
      if (!el) return;
      el.currentTime = 0;
      el.volume = CLICK_VOLUME;
      el.play().catch(() => {});
    }, CLICK_DELAY_MS);
  }, []);

  const playToggleOn = useCallback(() => {
    playOneShot(toggleOnRef, TOGGLE_VOLUME);
  }, [playOneShot]);

  const playToggleOff = useCallback(() => {
    playOneShot(toggleOffRef, TOGGLE_VOLUME);
  }, [playOneShot]);

  const playMenu = useCallback(() => {
    playOneShot(menuRef, MENU_VOLUME);
  }, [playOneShot]);

  const playLogo = useCallback(() => {
    if (!getStoredSoundPreference()) return;
    const el = logoRef.current;
    if (!el) return;
    el.currentTime = 0;
    el.volume = LOGO_VOLUME;
    el.play().catch(() => {});
  }, []);

  const startAmbient = useCallback(() => {
    const el = ambientRef.current;
    if (!el || !getStoredSoundPreference() || ambientStarted) return;
    el.volume = 0;
    el.loop = true;
    el.play()
      .then(() => {
        setAmbientStarted(true);
        const start = performance.now();
        const fadeIn = () => {
          const t = (performance.now() - start) / 1000;
          if (t >= AMBIENT_FADE_IN_DURATION) {
            el.volume = AMBIENT_VOLUME;
            return;
          }
          el.volume = (t / AMBIENT_FADE_IN_DURATION) * AMBIENT_VOLUME;
          fadeRafRef.current = requestAnimationFrame(fadeIn);
        };
        fadeRafRef.current = requestAnimationFrame(fadeIn);
      })
      .catch(() => {
        userInteractedRef.current = false;
      });
  }, [ambientStarted]);

  const stopAmbient = useCallback(() => {
    const el = ambientRef.current;
    if (!el) return;
    if (fadeRafRef.current != null) {
      cancelAnimationFrame(fadeRafRef.current);
      fadeRafRef.current = null;
    }
    el.pause();
    el.currentTime = 0;
    setAmbientStarted(false);
  }, []);

  const onLoaderComplete = useCallback(() => {
    loaderCompleteRef.current = true;
    startAmbient();
  }, [startAmbient]);

  useEffect(() => {
    const handleInteraction = () => {
      if (userInteractedRef.current) return;
      userInteractedRef.current = true;
      if (loaderCompleteRef.current && getStoredSoundPreference() && !ambientStarted) startAmbient();
    };
    window.addEventListener("click", handleInteraction, { once: true, capture: true });
    window.addEventListener("keydown", handleInteraction, { once: true, capture: true });
    window.addEventListener("touchstart", handleInteraction, { once: true, capture: true });
    return () => {
      window.removeEventListener("click", handleInteraction, { capture: true });
      window.removeEventListener("keydown", handleInteraction, { capture: true });
      window.removeEventListener("touchstart", handleInteraction, { capture: true });
    };
  }, [ambientStarted, startAmbient]);

  useEffect(() => {
    const handleVisibility = () => {
      const el = ambientRef.current;
      if (!el) return;
      if (document.hidden) {
        el.pause();
        if (fadeRafRef.current != null) {
          cancelAnimationFrame(fadeRafRef.current);
          fadeRafRef.current = null;
        }
      } else {
        if (soundOn && ambientStarted) {
          el.volume = AMBIENT_VOLUME;
          el.play().catch(() => {});
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [soundOn, ambientStarted]);

  useEffect(() => {
    const preload = () => {
      [clickRef, toggleOnRef, toggleOffRef, menuRef, logoRef, ambientRef].forEach((ref) => {
        if (ref.current) ref.current.load();
      });
    };
    if (typeof document !== "undefined" && document.readyState === "complete") preload();
    else if (typeof window !== "undefined") window.addEventListener("load", preload);
    return () => (typeof window !== "undefined" ? window.removeEventListener("load", preload) : undefined);
  }, []);

  useEffect(() => {
    return () => {
      if (fadeRafRef.current != null) cancelAnimationFrame(fadeRafRef.current);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  const value: AudioController = {
    soundOn,
    setSoundOn,
    playClick,
    playToggleOn,
    playToggleOff,
    playMenu,
    playLogo,
    startAmbient,
    stopAmbient,
    onLoaderComplete,
    ambientStarted
  };

  return (
    <AudioContext.Provider value={value}>
      <audio ref={clickRef} src={AUDIO_PATHS.click} preload="metadata" />
      <audio ref={toggleOnRef} src={AUDIO_PATHS.toggleOn} preload="metadata" />
      <audio ref={toggleOffRef} src={AUDIO_PATHS.toggleOff} preload="metadata" />
      <audio ref={menuRef} src={AUDIO_PATHS.menu} preload="metadata" />
      <audio ref={logoRef} src={AUDIO_PATHS.logo} preload="metadata" />
      <audio ref={ambientRef} src={AUDIO_PATHS.ambient} preload="auto" />
      {children}
    </AudioContext.Provider>
  );
}
