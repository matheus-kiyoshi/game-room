'use client'
import { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="hidden md:block">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="block md:hidden">
        <Header />
      </div>
    </>
  )
}
