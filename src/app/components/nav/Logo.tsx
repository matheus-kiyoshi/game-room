import { twMerge } from 'tailwind-merge'
import { BiSolidGame } from 'react-icons/bi'
// eslint-disable-next-line camelcase
import { Press_Start_2P } from 'next/font/google'

const PressStart2P = Press_Start_2P({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
})

export default function Logo({
  isOpen,
  classname,
}: {
  isOpen: boolean
  classname?: string
}) {
  return (
    <div
      className={twMerge(
        'w-full h-40 flex justify-center items-center',
        classname,
      )}
    >
      <div
        className={twMerge(
          'flex justify-start items-center transition-all duration-700',
          isOpen ? 'w-56 h-32' : 'w-12 h-12',
        )}
      >
        <BiSolidGame className="w-28 h-28 text-yellow-500" />
        {isOpen && (
          <p className={twMerge('text-white text-3xl', PressStart2P.className)}>
            Game Room
          </p>
        )}
      </div>
    </div>
  )
}
