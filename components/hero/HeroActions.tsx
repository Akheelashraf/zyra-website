import { Button } from "../ui/Button";

export function HeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button href="/contact" variant="primary" size="md">
        Request Quote
      </Button>
      <Button
        href="/projects"
        variant="ghost"
        size="sm"
        className="text-white/90 hover:bg-white/15 hover:text-white motion-reduce:hover:translate-y-0"
      >
        View Projects
      </Button>
    </div>
  );
}

