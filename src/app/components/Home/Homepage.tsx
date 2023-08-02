import Description from './Description'
import Title from './Title'
import Waves from './Waves'

export default function Homepage() {
  return (
    <>
      <div className="w-full h-[75vh]	mt-20">
        <Title />
      </div>
      <Waves />
      <Description />
    </>
  )
}
