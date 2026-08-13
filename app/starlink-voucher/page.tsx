import { VoucherPlans, ContactSection } from "@/components/starlink-voucher"
import { VoucherPlan } from "@/types"

export default function StarlinkVoucher() {
  return (
    <div className="min-h-screen">
      <VoucherPlans />

      <ContactSection />
    </div>
  )
}