import { Poppins } from 'next/font/google'
import Iframe from 'react-iframe'
import { twMerge } from 'tailwind-merge'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '700',
})

export default function PacMan() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-10">
        <h1
          className={twMerge(
            poppins.className,
            'text-white text-5xl text-center',
          )}
        >
          2048
        </h1>
        <div className="bg-zinc-800 p-6 w-[75vw] h-[75vh] m-auto">
          <Iframe
            url="https://play2048.co"
            width="100%"
            height="100%"
            allowFullScreen
          />
        </div>
      </div>
    </main>
  )
}
