import { Poppins } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import Game from '../components/TicTacToe/Game'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '700',
})

export default function TicTacToe() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-10">
        <h1
          className={twMerge(
            poppins.className,
            'text-white text-5xl text-center',
          )}
        >
          Tic-Tac-Toe
        </h1>
        <div className="bg-zinc-800 p-6 sm:p-20 m-auto">
          <Game />
        </div>
      </div>
    </main>
  )
}
