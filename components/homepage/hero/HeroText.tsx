import { ShieldCheck, Truck, Repeat } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Authentic",
    subtitle: "Genuine Products",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    subtitle: "Across Nigeria",
  },
  {
    icon: Repeat,
    title: "We Buy, Sell & Swap",
    subtitle: "Best Value Deals",
  },
];

export default function HeroText() {
  return (
    <div className="flex max-w-xl flex-col gap-8">
      <span className="text-sm font-semibold uppercase tracking-widest text-primary">
        Welcome to Mazi Gadgets
      </span>

      <h1 className="font-heading text-5xl font-extrabold leading-[1.05] text-white md:text-6xl">
        Your Trusted
        <br />
        <span className="glow-text text-primary">Gadget Partner</span>
      </h1>

      <p className="max-w-md text-base text-muted-foreground md:text-lg">
        We buy, we sell, we swap. Quality phones, accessories and Starlink
        vouchers. All in one reliable place.
      </p>

      <div className="flex flex-wrap gap-4">
        <button className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-dark-bakground transition-colors hover:bg-primary-hover">
          Shop Now
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>

        <button className="glow-border inline-flex items-center gap-2 rounded-full border border-primary/60 px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/10">
          Starlink Voucher
          <TicketIcon />
        </button>
      </div>

      {/* Trust badges */}
      <div className="flex flex-wrap gap-8 pt-4">
        {features.map(({ icon: Icon, title, subtitle }) => (
          <div key={title} className="flex items-center gap-3">
            <Icon
              className="h-5 w-5 shrink-0 text-primary"
              strokeWidth={1.75}
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="text-xs text-muted-foreground">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TicketIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1a1.5 1.5 0 0 0 0 3v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a1.5 1.5 0 0 0 0-3V9Z"
      />
    </svg>
  );
}