import { Monoton } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import '@/app/globals.css'

const monoton = Monoton({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
})

export default function Title() {
  return (
    <div
      className={twMerge(
        'text-white text-7xl sm:text-9xl xl:text-[12rem] w-full h-full flex flex-col justify-center items-center',
        monoton.className,
      )}
    >
      <div className="ml-8 sm:ml-0 -z-10">
        <h1
          className="drop-shadow-v2 ml-10 -z-10 relative -left-[100%]"
          style={{ animation: 'slideInLeft 2s forwards' }}
        >
          Game
        </h1>
        <h1
          className="drop-shadow-v3 mr-16 -z-10 relative -right-[100%]"
          style={{ animation: 'slideInRight 2s forwards' }}
        >
          Room
        </h1>
      </div>
    </div>
  )
}
