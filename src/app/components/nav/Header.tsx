import { useState } from 'react'
import HamburgerMenuButton from './HamburguerMenuButton'
import Logo from './Logo'
import { useScrollDown } from './hooks/useScrollDown'
import GitHubIcon from './GitHubIcon'
import SidebarItem from './SidebarItem'
import Link from 'next/link'

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
        <Link href="/">
          <Logo isOpen={true} classname="justify-start" />
        </Link>
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
              <Link href="/TicTacToe">
                <SidebarItem isOpen={isOpen} text="Tic-Tac-Toe" />
              </Link>
              <Link href="/PacMan">
                <SidebarItem isOpen={isOpen} text="PacMan" />
              </Link>
              <Link href="/MortalKombat">
                <SidebarItem isOpen={isOpen} text="Mortal Kombat" />
              </Link>
              <Link href="/2048">
                <SidebarItem isOpen={isOpen} text="2048" />
              </Link>
            </div>
            <GitHubIcon />
          </div>
        )}
      </div>
    </header>
  )
}
