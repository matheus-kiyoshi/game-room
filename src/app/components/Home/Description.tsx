import Image from 'next/image'
import room from '@/../public/room.png'
import { Roboto } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
})

export default function Description() {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-12 items-center">
      <Image
        src={room}
        alt="game-room"
        className="-z-10 filter drop-shadow-v2"
      />
      <p
        className={twMerge(roboto.className, 'text-white text-4xl sm:text-7xl')}
      >
        Awaken the Fun <br /> with Our Games!
      </p>
    </section>
  )
}
