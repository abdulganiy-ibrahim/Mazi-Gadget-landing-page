import WhyChooseUsCard from "./WhyChooseUsCard";

export default function WhyChooseUs() {
  return (
    <section className="mt-10 mx-auto py-2 px-4 md:px-10">
      <div className="flex flex-col items-center">
        <h2 className="text-sm text-primary font-semibold uppercase">Why choose us</h2>

        <h1 className="text-xl md:text-2xl lg:4xl text-center font-heading font-semibold">Why Customer Choose <span className="text-primary">Mazi Gadgets</span></h1>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-5">
        <WhyChooseUsCard />
      </div>
    </section>
  )
}