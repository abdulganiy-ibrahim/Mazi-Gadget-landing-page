import { ImageLogo } from "../brand"
import FooterLinks from "./FooterLinks"

export default function Footer() {
  return (
    <section className="mt-10 bg-dark-background text-white flex flex-col lg:flex-row items-center justify-center gap-2">
      <div>
        <ImageLogo width={250} height={200}/>
      </div>

      <div>
        <FooterLinks />
      </div>
    </section>
  )
}