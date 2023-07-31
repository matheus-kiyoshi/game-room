import { FaGamepad } from 'react-icons/fa'

export default function SidebarItem({
  isOpen,
  text,
}: {
  isOpen: boolean
  text: string
}) {
  return (
    <div className="w-full mt-4 mb-10 transition-all duration-700 flex justify-center items-center gap-4 text-white hover:text-purple-700 cursor-pointer">
      <FaGamepad className="w-8 h-8" />
      {isOpen && <p className="text-lg">{text}</p>}
    </div>
  )
}
