import MenuButton from "./components/MenuButton"
import TopBarLeft from "./components/TopBarLeft"
import TopBarMid from "./components/TopBarMid"
import TopBarRight from "./components/TopBarRight"

export default function Navbar() {
  return (
    <nav id="header" className="w-full z-30 top-0 py-1">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
        <MenuButton />
        <TopBarLeft />
        <TopBarMid />
        <TopBarRight />
      </div>
    </nav>

  )
}
