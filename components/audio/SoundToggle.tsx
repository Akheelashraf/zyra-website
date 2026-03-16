"use client";

import { useAudio } from "./AudioProvider";

export function SoundToggle() {
  const { soundOn, setSoundOn, playToggleOn, playToggleOff } = useAudio();

  const handleClick = () => {
    const next = !soundOn;
    if (next) {
      setSoundOn(true);
      playToggleOn();
    } else {
      playToggleOff();
      setSoundOn(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white/70 text-slate-600 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-1 focus-visible:ring-offset-white"
      aria-label={soundOn ? "Disable sound" : "Enable sound"}
      aria-pressed={!soundOn}
    >
      {soundOn ? (
        <SoundOnIcon className="h-4 w-4" />
      ) : (
        <SoundOffIcon className="h-4 w-4" />
      )}
    </button>
  );
}

function SoundOnIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75H6.75Z"
      />
    </svg>
  );
}

function SoundOffIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75h2.739Z"
      />
    </svg>
  );
}
