const HERO_SEQUENCE_FRAME_COUNT = 24;

const heroSequenceFrames: string[] = Array.from(
  { length: HERO_SEQUENCE_FRAME_COUNT },
  (_, index) => {
    const frameNumber = String(index + 1).padStart(4, "0");
    return `/hero-sequence-test/frame-${frameNumber}.webp`;
  }
);

export { heroSequenceFrames, HERO_SEQUENCE_FRAME_COUNT };

