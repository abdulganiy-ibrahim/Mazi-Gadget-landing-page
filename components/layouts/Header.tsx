import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"

export default function Header() {
  return (
    <header className="border-b border">
      <MobileHeader />
      <DesktopHeader />
    </header>
  )
}