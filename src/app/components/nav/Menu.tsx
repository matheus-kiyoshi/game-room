import { useState } from 'react'
import HamburgerMenuButton from './HamburguerMenuButton'
import SidebarItem from './SidebarItem'
import GitHubIcon from './GitHubIcon'

export default function Menu() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <HamburgerMenuButton open={open} setOpen={setOpen} />
    </div>
  )
}
