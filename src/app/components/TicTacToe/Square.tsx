import { twMerge } from 'tailwind-merge'
// eslint-disable-next-line camelcase
import { Cherry_Bomb_One } from 'next/font/google'

const cherryBomb = Cherry_Bomb_One({
  subsets: ['latin'],
  weight: '400',
})

export default function Square({
  value,
  onClick,
}: {
  value: string
  onClick: () => void
}) {
  return (
    <button
      className={twMerge(
        'w-16 h-16 sm:w-24 sm:h-24 bg-slate-700 rounded-md text-6xl',
        value === 'O' ? 'text-red-500' : 'text-green-500',
        cherryBomb.className,
      )}
      onClick={onClick}
    >
      {value}
    </button>
  )
}
