import { FaGamepad } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

export default function SidebarItem({
  classname,
  isOpen,
  text,
}: {
  classname?: string
  isOpen: boolean
  text: string
}) {
  return (
    <div
      className={twMerge(
        'w-full mt-1 mb-7 py-3 transition-all duration-700 flex justify-center items-center gap-4 text-white cursor-pointer hover:text-purple-700 from-zinc-900 to-zinc-800',
        classname,
      )}
    >
      <FaGamepad className="w-8 h-8" />
      {isOpen && <p className="text-lg">{text}</p>}
    </div>
  )
}
