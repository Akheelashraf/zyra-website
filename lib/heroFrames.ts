const FRAME_COUNT = 60;

const heroFrames: string[] = Array.from({ length: FRAME_COUNT }, (_, index) => {
  const frameNumber = String(index + 1).padStart(4, "0");
  return `/hero-sequence/frame-${frameNumber}.webp`;
});

export { heroFrames, FRAME_COUNT };

