import { NavLink, WhyChooseUs, Category, VoucherPlan } from "@/types";
import { ArrowRight, ShieldCheck, Tag, Truck, Headphones } from "lucide-react";

export const navLinks: NavLink[] = [
  {icon: ArrowRight, href: '/', label: 'Home' },
  {icon: ArrowRight, href: '/starlink-voucher', label: 'Starlink voucher' },
  {icon: ArrowRight, href: '/about', label: 'About' },
  {icon: ArrowRight, href: '/contact', label: 'Contact' },
]

export const whyChooseUs: WhyChooseUs[] = [
  {icon: ShieldCheck, label: 'Quality you can trust', desc: 'We source only 100% original and reliable products.'},
  {icon: Tag, label: 'Best prices', desc: 'Competitive prices with great for your money.'},
  {icon: Truck, label: 'Fast & save delivery', desc: 'Quick delivery to your doorstep, safe and reliable.'},
  {icon: ShieldCheck, label: 'Customer support', desc: 'We always here to help you before and after purchase.'},
]

export const categories: Category[] = [
  {image: '/categoryImage/phones.png', label: 'Phones'},
  {image: '/categoryImage/accessories.png', label: 'Accessories'},
  {image: '/categoryImage/laptop.png', label: 'Laptops'},
  {image: '/categoryImage/power-bank.png', label: 'Power banks'},
  {image: '/categoryImage/smart-watch.png', label: 'Phones'},
  {image: '/categoryImage/starlink.png', label: 'Starlink voucher'},
]

export const starlinkPlans: VoucherPlan[] = [
  // ── Daily (short-term, 1–5 day plans) ──────────────
  {
    id: "d1",
    data: "Unlimited",
    validity: "1 Day",
    users: 1,
    price: 2000,
    category: "daily",
  },
  {
    id: "d2",
    data: "2GB",
    validity: "1 Day",
    users: 1,
    price: 300,
    category: "daily",
  },
  {
    id: "d3",
    data: "4GB",
    validity: "1 Day",
    users: 1,
    price: 400,
    category: "daily",
  },
  {
    id: "d4",
    data: "5GB",
    validity: "2 Days",
    users: 2,
    price: 700,
    category: "daily",
  },
  {
    id: "d5",
    data: "5GB",
    validity: "3 Days",
    users: 1,
    price: 800,
    category: "daily",
  },
  {
    id: "d6",
    data: "10GB",
    validity: "4 Days",
    users: 2,
    price: 1200,
    category: "daily",
  },
  {
    id: "d7",
    data: "15GB",
    validity: "5 Days",
    users: 2,
    price: 1800,
    category: "daily",
  },

  // ── Weekly (1–3 week plans) ─────────────────────────
  {
    id: "w1",
    data: "Unlimited",
    validity: "1 Week",
    users: 1,
    price: 10000,
    category: "weekly",
  },
  {
    id: "w2",
    data: "10GB",
    validity: "1 Week",
    users: 1,
    price: 1500,
    category: "weekly",
  },
  {
    id: "w3",
    data: "10GB",
    validity: "1 Week",
    users: 2,
    price: 1700,
    category: "weekly",
  },
  {
    id: "w4",
    data: "20GB",
    validity: "1 Week",
    users: 1,
    price: 2500,
    category: "weekly",
  },
  {
    id: "w5",
    data: "20GB",
    validity: "1 Week",
    users: 2,
    price: 2800,
    category: "weekly",
  },
  {
    id: "w6",
    data: "30GB",
    validity: "2 Weeks",
    users: 2,
    price: 4000,
    category: "weekly",
  },
  {
    id: "w7",
    data: "30GB",
    validity: "3 Weeks",
    users: 3,
    price: 4500,
    category: "weekly",
  },
  {
    id: "w8",
    data: "40GB",
    validity: "3 Weeks",
    users: 3,
    price: 5500,
    category: "weekly",
  },

  // ── Monthly (metered) ───────────────────────────────
  {
    id: "m1",
    data: "40GB",
    validity: "1 Month",
    users: 3,
    price: 6500,
    category: "monthly",
  },
  {
    id: "m2",
    data: "60GB",
    validity: "1 Month",
    users: 4,
    price: 7500,
    category: "monthly",
  },
  {
    id: "m3",
    data: "80GB",
    validity: "1 Month",
    users: 4,
    price: 9000,
    category: "monthly",
  },
  {
    id: "m4",
    data: "100GB",
    validity: "1 Month",
    users: 6,
    price: 10000,
    category: "monthly",
  },
  {
    id: "m5",
    data: "150GB",
    validity: "1 Month",
    users: 6,
    price: 15000,
    category: "monthly",
  },
  {
    id: "m6",
    data: "230GB",
    validity: "1 Month",
    users: 6,
    price: 20000,
    category: "monthly",
  },

  // ── Monthly Unlimited ───────────────────────────────
  {
    id: "mu1",
    data: "Unlimited",
    validity: "1 Month",
    users: 1,
    price: 35000,
    category: "monthly-unlimited",
  },
];