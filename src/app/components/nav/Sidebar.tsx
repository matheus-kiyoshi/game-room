import { twMerge } from 'tailwind-merge'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import GitHubIcon from './GitHubIcon'

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
      <Logo isOpen={isOpen} />
      <div className="w-full flex flex-col flex-grow justify-between">
        <div>
          <SidebarItem
            classname="hover:bg-gradient-to-l"
            isOpen={isOpen}
            text="Minigame 1"
          />
          <SidebarItem
            classname="hover:bg-gradient-to-l"
            isOpen={isOpen}
            text="Minigame 2"
          />
          <SidebarItem
            classname="hover:bg-gradient-to-l"
            isOpen={isOpen}
            text="Minigame 3"
          />
          <SidebarItem
            classname="hover:bg-gradient-to-l"
            isOpen={isOpen}
            text="Minigame 4"
          />
          <SidebarItem
            classname="hover:bg-gradient-to-l"
            isOpen={isOpen}
            text="Minigame 5"
          />
        </div>
        <GitHubIcon />
      </div>
    </nav>
  )
}
