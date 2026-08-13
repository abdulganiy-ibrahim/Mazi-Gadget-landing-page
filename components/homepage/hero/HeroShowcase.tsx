

export default function HeroShowcase() {
  return (
    <div className="relative flex h-[420px] w-full items-center justify-center md:h-[560px]">
      {/* Ambient background glow — soft fill behind everything */}
      <div className="glow-orb pointer-events-none absolute inset-0 m-auto h-[380px] w-[380px] rounded-full md:h-[460px] md:w-[460px]" />

      {/* Arc ring glow — the circular halo behind the product stack */}
      <div className="glow-border pointer-events-none absolute right-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 translate-x-[10%] rounded-full border border-primary/40 md:h-[400px] md:w-[400px]" />

      {/* Pedestal glow — flat elliptical light the product "sits" on */}
      <div className="glow-pedestal pointer-events-none absolute bottom-8 h-10 w-[75%] max-w-[420px] rounded-full" />
      <div className="glow-border-strong pointer-events-none absolute bottom-10 h-[3px] w-[55%] max-w-[320px] rounded-full bg-primary" />

      {/* ── Image placeholder ─────────────────────────────
          Swap this entire block for your real product image, e.g.:

          <Image
            src="/hero-showcase.png"
            alt="PS5, iPhones, Apple Watch, AirPods and Starlink voucher"
            fill
            className="relative z-10 object-contain"
            priority
          />
      ────────────────────────────────────────────────── */}
      <div className="relative z-10 flex h-full w-full max-w-[520px] items-end justify-center pb-10">
        <div className="flex h-[85%] w-[85%] items-center justify-center rounded-2xl border border-dashed border-primary/40 bg-white/5 text-center">
          <p className="px-6 text-sm text-muted-foreground">
            Drop your product showcase image here
            <br />
            <span className="text-xs">
              recommended: transparent PNG, 1000×1000px+
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}