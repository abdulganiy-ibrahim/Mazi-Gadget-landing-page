import { LucideIcon } from 'lucide-react';

export interface NavLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface WhyChooseUs {
  icon: LucideIcon;
  label: string;
  desc: string;
}

export interface Category {
  image: string;
  label: string;
}

export type ValidityCategory =
  | "daily"
  | "weekly"
  | "monthly"
  | "monthly-unlimited";

export interface VoucherPlan {
  id: string;
  data: string; // e.g. "10GB" or "Unlimited"
  validity: string; // e.g. "1 Day", "2 Weeks", "1 Month"
  users: number;
  price: number; // naira
  category: ValidityCategory;
}

export interface ValidityTab {
  label: string;
  value: ValidityCategory;
}

export const validityTabs: ValidityTab[] = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
  { label: "Monthly Unlimited", value: "monthly-unlimited" },
];