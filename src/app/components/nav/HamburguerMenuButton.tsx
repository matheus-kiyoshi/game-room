import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

export default function HamburgerMenuButton({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <button onClick={() => setOpen(!open)}>
      {open && <AiOutlineClose className="w-14 h-14 text-white" />}
      {!open && <FaBars className="w-14 h-14 text-white" />}
    </button>
  )
}
