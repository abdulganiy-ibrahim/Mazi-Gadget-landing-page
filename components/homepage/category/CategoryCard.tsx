import Image from "next/image"
import { categories } from "@/lib/data"

export default function CategoryCard() {
  return (
    <>
      {
        categories.map((category) => (
          <div 
            key={category.label}
            className="bg-background-card rounded-xl shadow-card p-6 flex flex-col items-center justify-center gap-4"
          >
            <Image 
              src={category.image}
              alt={category.label}
              width={50}
              height={50}
              className="object-fill"
            />

            <div>
              <h1 className="font-semibold">{category.label}</h1>
            </div>

          </div>
        ))
      }
    </> 
  )
}