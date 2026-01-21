import { EventDetail } from '@/utils/types/eventDetails'
import { MapPin, TimeIcon } from '../../utils/Icons'
import ScaleUp from '../animation/ScaleUp'
import FadeDown from '../animation/FadeDown'
import FadeUp from '../animation/FadeUp'

type EventCardProps = {
  data: EventDetail
}

export default function EventCard({ data }: EventCardProps) {

  return (
    <ScaleUp delay={0.3} requireMusic className="flex flex-col justify-center bg-white/80 text-center rounded-2xl shadow-md p-6">
      <FadeDown requireMusic delay={1}>
        <h2 className="font-ivy-mode text-[34px]">{data.title}</h2>
      </FadeDown>
      <span className='h-8'></span>
      <ScaleUp requireMusic delay={0.3}>
        <h3 className='text-[20px]'>{data.date}</h3>
      </ScaleUp>
      <span className='h-8'></span>
      <FadeUp requireMusic delay={0.3} className='flex items-center text-[#696969] mx-auto gap-2'>
        <TimeIcon className="size-4" />
        <span className='text-sm tracking-widest'>{data.time}</span>
      </FadeUp>
      <FadeUp requireMusic delay={0.3}>
        <p className='text-sm font-semibold text-[#696969]'>{data.place}</p>
      </FadeUp>
      <FadeUp requireMusic delay={0.3} >
        <p className='text-sm max-w-60 mx-auto text-[#424242]'>{data.address}</p>
      </FadeUp>
      <FadeUp requireMusic delay={0.3}>
        <a href={data.mapUrl} target="_blank" rel="noopener noreferrer" className='flex justify-center my-5'>
          <button className="bg-white text-[#747474] flex gap-0.5 items-center border border-[#747474] py-2.5 px-5">
            <MapPin className='size-4' />
            <span className='text-[13px] font-semibold'>Google Map</span>
          </button>
        </a>
      </FadeUp>
    </ScaleUp>
  )
}
