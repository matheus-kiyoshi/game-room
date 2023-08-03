import { twMerge } from 'tailwind-merge'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import GitHubIcon from './GitHubIcon'
import Link from 'next/link'

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <nav
      className={twMerge(
        'bg-zinc-800 w-20 h-screen flex flex-col fixed left-0 top-0 transition-all duration-700',
        isOpen && 'w-72',
      )}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link href="/">
        <Logo isOpen={isOpen} />
      </Link>
      <div className="w-full flex flex-col flex-grow justify-between">
        <div>
          <Link href="/TicTacToe">
            <SidebarItem
              classname="hover:bg-gradient-to-l"
              isOpen={isOpen}
              text="Tic-Tac-Toe"
            />
          </Link>
          <Link href="/PacMan">
            <SidebarItem
              classname="hover:bg-gradient-to-l"
              isOpen={isOpen}
              text="PacMan"
            />
          </Link>
          <Link href="/MortalKombat">
            <SidebarItem
              classname="hover:bg-gradient-to-l"
              isOpen={isOpen}
              text="Mortal Kombat"
            />
          </Link>
          <Link href="/2048">
            <SidebarItem
              classname="hover:bg-gradient-to-l"
              isOpen={isOpen}
              text="2048"
            />
          </Link>
        </div>
        <GitHubIcon />
      </div>
    </nav>
  )
}
