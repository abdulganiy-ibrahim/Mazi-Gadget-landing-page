import HeroShowcase from "./HeroShowcase";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark-background">
      {/* Decorative dotted grid, bottom-left, matching the reference
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 opacity-30 sm:h-56 sm:w-56"
        style={{
          backgroundImage:
            "radial-gradient(rgba(245,166,35,0.5) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage:
            "radial-gradient(circle at bottom left, black 40%, transparent 80%)",
        }}
      /> */}

      <div className="mx-auto flex flex-col lg:flex-row items-center gap-12 py-6 px-4">
        <div className="lg:basis-3/5">
          <HeroText />
        </div>
    
      </div>
    </section>
  );
}