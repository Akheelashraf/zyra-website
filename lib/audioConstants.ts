/** Production audio paths (public/audio/). */
export const AUDIO_PATHS = {
  click: "/audio/click.mp3",
  toggleOn: "/audio/toggle-on.mp3",
  toggleOff: "/audio/toggle-off.mp3",
  menu: "/audio/menu.mp3",
  ambient: "/audio/ambient.mp3",
  logo: "/audio/logo.mp3"
} as const;

/** Target volume for ambient loop: soft environmental tone. */
export const AMBIENT_VOLUME = 0.05;

/** Menu open/close: gentle UI confirmation. */
export const MENU_VOLUME = 0.035;

/** Click sound: very light tactile feedback. */
export const CLICK_VOLUME = 0.03;

/** Toggle sounds: soft UI switch feedback. */
export const TOGGLE_VOLUME = 0.03;

/** Logo loading sound: subtle startup cue. */
export const LOGO_VOLUME = 0.04;

/** Fade-in duration for ambient (seconds). */
export const AMBIENT_FADE_IN_DURATION = 1.5;

/** Fade-out duration when disabling sound (seconds). */
export const AMBIENT_FADE_OUT_DURATION = 1;

/** Delay before playing click (ms) to avoid harsh overlap. */
export const CLICK_DELAY_MS = 25;

/** Min ms between click plays to prevent sound stacking on fast clicks. */
export const CLICK_COOLDOWN_MS = 120;

/** localStorage key for sound preference. */
export const SOUND_PREFERENCE_KEY = "zyra-sound-enabled";
