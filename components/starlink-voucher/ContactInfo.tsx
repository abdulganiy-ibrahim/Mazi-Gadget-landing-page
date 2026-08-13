import { MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "../SVG";

const PHONE_NUMBER = "07030724273";
const WHATSAPP_NUMBER = "2347030724273";
const ADDRESS = "Dama Junction, along FUTMinna main campus, Minna, Niger State";

function buildWhatsAppLink() {
  const message = "Hi, I'd like to know more about your products and services.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function buildDirectionsLink() {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;
}

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-center gap-6">
      <span className="text-sm font-semibold uppercase tracking-widest text-primary">
        Get In Touch
      </span>

      <h2 className="font-heading text-3xl font-semibold md:text-4xl">
        Find & Reach Us
      </h2>

      <p className="max-w-md text-muted-foreground">
        Stop by the shop or reach out directly. we're happy to help you
        pick the right device or voucher.
      </p>

      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
          <p className="text-foreground">{ADDRESS}</p>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="text-foreground transition-colors hover:text-primary"
          >
            {PHONE_NUMBER}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <WhatsAppIcon className="h-5 w-5 shrink-0 text-primary" />
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground transition-colors hover:text-primary"
          >
            {PHONE_NUMBER}
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 pt-2">
        <a
          href={buildDirectionsLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="glow-border inline-flex items-center gap-2 rounded-full border border-primary/60 px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
        >
          Get Directions
        </a>
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-dark-bakground transition-colors hover:bg-primary-hover"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}