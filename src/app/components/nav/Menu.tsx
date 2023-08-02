import { useState } from 'react'
import HamburgerMenuButton from './HamburguerMenuButton'

export default function Menu() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <HamburgerMenuButton open={open} setOpen={setOpen} />
    </div>
  )
}
