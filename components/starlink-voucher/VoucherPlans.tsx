"use client";

import { useState } from "react";
import { starlinkPlans } from "@/lib/data";
import { validityTabs, type ValidityCategory, type VoucherPlan } from "@/types";

const WHATSAPP_NUMBER = "2347030724273";

function formatPrice(price: number) {
  return `₦${price.toLocaleString("en-NG")}`;
}

function buildWhatsAppLink(plan: VoucherPlan) {
  const message = `Hi, I'd like to buy the ${plan.data} / ${plan.validity} Starlink voucher for ${formatPrice(
    plan.price
  )}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function VoucherPlans() {
  const [activeTab, setActiveTab] = useState<ValidityCategory>("daily");

  const activePlans = starlinkPlans.filter((plan) => plan.category === activeTab);

  return (
    <section className="bg-dark-bakground px-6 py-16 md:px-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center font-heading text-3xl font-bold text-white">
          Starlink Voucher Plans
        </h2>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {validityTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                activeTab === tab.value
                  ? "glow-border bg-primary text-dark-bakground"
                  : "border border-border text-muted-foreground hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Desktop / tablet table (md and up) */}
        <div className="hidden overflow-hidden rounded-3xl border border-border bg-background-card shadow-sm md:block">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr className="divide-x divide-border border-b border-border bg-background">
                <th className="px-6 py-4 text-sm font-semibold text-foreground">Data</th>
                <th className="px-6 py-4 text-sm font-semibold text-foreground">Validity</th>
                <th className="px-6 py-4 text-sm font-semibold text-foreground">Users</th>
                <th className="px-6 py-4 text-sm font-semibold text-foreground">Price</th>
                <th className="px-6 py-4 text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {activePlans.map((plan) => (
                <tr
                  key={plan.id}
                  className="divide-x divide-border transition-colors hover:bg-background"
                >
                  <td className="px-6 py-5 font-semibold text-foreground">{plan.data}</td>
                  <td className="px-6 py-5 text-muted-foreground">{plan.validity}</td>
                  <td className="px-6 py-5 text-muted-foreground">
                    {plan.users} {plan.users === 1 ? "User" : "Users"}
                  </td>
                  <td className="px-6 py-5 font-semibold text-primary">
                    {formatPrice(plan.price)}
                  </td>
                  <td className="px-6 py-5">
                    <a
                      href={buildWhatsAppLink(plan)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-dark-bakground shadow-sm transition-colors hover:bg-primary-hover"
                    >
                      Buy Now
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards (below md) */}
        <div className="flex flex-col gap-4 md:hidden">
          {activePlans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-2xl border border-border bg-white/5 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-bold text-foreground">{plan.data}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.validity} · {plan.users} {plan.users === 1 ? "User" : "Users"}
                  </p>
                </div>
                <p className="whitespace-nowrap text-lg font-semibold text-primary">
                  {formatPrice(plan.price)}
                </p>
              </div>
              <a
                href={buildWhatsAppLink(plan)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-dark-bakground transition-colors hover:bg-primary-hover"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}