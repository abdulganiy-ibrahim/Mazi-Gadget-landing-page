import { whyChooseUs } from "@/lib/data"

export default function WhyChooseUsCard() {
  return (
    <>
    {
      whyChooseUs.map((text) => (
        <div 
          key={text.label}
          className="flex items-center justify-between gap-2 md:border-r-border"
        >
          <div className="rounded-full p-4 bg-background-card shadow-card">
            <text.icon className="w-10 h-10 text-primary" />
          </div>

          <div className="flex flex-col items-start gap-2">
            <h1 className="font-semibold">{text.label}</h1>

            <p className="text-muted-foreground text-sm">{text.desc}</p>
          </div>
        </div>
      ))
    }
    </>
  )
}