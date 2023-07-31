'use client'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import SidebarItem from './SidebarItem'
import { FaGithub } from 'react-icons/fa'
import { MdKeyboardArrowLeft } from 'react-icons/md'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={twMerge(
        'bg-zinc-800 h-screen flex flex-col transition-all duration-700',
        isOpen ? 'w-72' : 'w-20',
      )}
    >
      <div className="w-full h-40 flex justify-center items-center">
        <div
          className={twMerge(
            'rounded-full bg-blue-900 transition-all duration-700',
            isOpen ? 'w-56 h-32' : 'w-12 h-12',
          )}
        ></div>
      </div>
      <div className="flex items-center w-full mb-8 justify-end">
        <button onClick={() => setIsOpen(!isOpen)}>
          <MdKeyboardArrowLeft
            className={twMerge(
              'w-10 h-10 text-white mr-6 hover:text-purple-700 transition-all duration-700',
              !isOpen && 'rotate-180 mr-5',
            )}
          />
        </button>
      </div>
      <div className="w-full flex flex-col flex-grow justify-between">
        <div>
          <SidebarItem isOpen={isOpen} text="Minigame 1" />
          <SidebarItem isOpen={isOpen} text="Minigame 2" />
          <SidebarItem isOpen={isOpen} text="Minigame 3" />
          <SidebarItem isOpen={isOpen} text="Minigame 4" />
          <SidebarItem isOpen={isOpen} text="Minigame 5" />
        </div>
        <div className="w-full mt-2 mb-6 flex justify-center items-center">
          <a href="https://github.com/matheus-kiyoshi" target="_blank">
            <FaGithub className="w-8 h-8 text-white hover:text-purple-700 cursor-pointer transition-colors" />
          </a>
        </div>
      </div>
    </div>
  )
}
