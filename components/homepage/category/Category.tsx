import CategoryCard from "./CategoryCard";

export default function Category() {
  return (
    <section className="mt-10 mx-auto py-2 px-4 md:px-10">
      <div className="flex flex-col items-center">
        <h2 className="text-sm text-primary font-semibold uppercase">Shop by category</h2>

        <h1 className="text-xl md:text-2xl lg:4xl text-center font-heading font-semibold">Everything You <span className="text-primary">Need</span></h1>
      </div>

      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <CategoryCard />
      </div>
    </section>
  )
}