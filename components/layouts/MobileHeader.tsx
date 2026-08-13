import MenuButton from "./MenuButton"
import { ImageLogo } from "../brand"
export default function MobileHeader() {
  return (
    <div className="flex items-center justify-between py-4 px-6 bg-dark-background lg:hidden">

      <div className="flex items-center gap-2">
        <ImageLogo height={80} width={100}/>
      </div>

      <div>
        <MenuButton />
      </div>

    </div>
  )
}