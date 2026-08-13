import { Phone } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "../SVG";

type FooterItem = {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

type FooterColumn = {
  title: string;
  items: FooterItem[];
};

const footerColumns: FooterColumn[] = [
  {
    title: "Quick Links",
    items: [
      { label: "Home", href: "/" },
      { label: "Shop", href: "/shop" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Customer Service",
    items: [
      { label: "Shipping & Delivery", href: "/shipping" },
      { label: "Returns & Refunds", href: "/returns" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
  {
    title: "Categories",
    items: [
      { label: "Phones", href: "/" },
      { label: "Accessories", href: "/" },
      { label: "Laptops", href: "/" },
      { label: "Starlink Voucher", href: "/" },
    ],
  },
  {
    title: "Contact Us",
    items: [
      { label: "07030724273", href: "tel:07030724273", icon: Phone },
      {
        label: "07030724273",
        href: "https://wa.me/2347030724273",
        icon: WhatsAppIcon,
      },
      {
        label: "@mazigadgets",
        href: "https://instagram.com/mazigadgets",
        icon: InstagramIcon,
      },
    ],
  },
];

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-10 bg-dark-bakground px-6 py-14 md:grid-cols-4 md:px-12">
      {footerColumns.map((column) => (
        <div key={column.title} className="flex flex-col gap-4">
          <h3 className="font-heading text-base font-semibold text-white">
            {column.title}
          </h3>
          <ul className="flex flex-col gap-3">
            {column.items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.icon && (
                    <item.icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}