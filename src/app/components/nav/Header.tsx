import { useState } from 'react'
import HamburgerMenuButton from './HamburguerMenuButton'
import Logo from './Logo'
import { useScrollDown } from './hooks/useScrollDown'
import GitHubIcon from './GitHubIcon'
import SidebarItem from './SidebarItem'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const visible = useScrollDown()

  return (
    <header
      className={`w-full bg-zinc-800 fixed top-0 transition-all duration-100 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="h-40 flex justify-between items-center px-2">
        <Logo isOpen={true} classname="justify-start" />
        <HamburgerMenuButton open={isOpen} setOpen={setIsOpen} />
      </div>
      <div
        className={`transition-all duration-700  ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {isOpen && (
          <div className="w-full flex flex-col flex-grow justify-between h-screen">
            <div>
              <SidebarItem isOpen={isOpen} text="Minigame 1" />
              <SidebarItem isOpen={isOpen} text="Minigame 2" />
              <SidebarItem isOpen={isOpen} text="Minigame 3" />
              <SidebarItem isOpen={isOpen} text="Minigame 4" />
              <SidebarItem isOpen={isOpen} text="Minigame 5" />
            </div>
            <GitHubIcon />
          </div>
        )}
      </div>
    </header>
  )
}
