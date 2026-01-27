import { EventDetail } from '@/utils/types/eventDetails'
import { MapPin, SeparatorIcon, TimeIcon } from '../../utils/Icons'
import ScaleUp from '../animations/ScaleUp'
import FadeDown from '../animations/FadeDown'
import FadeUp from '../animations/FadeUp'
import Image from 'next/image'

type EventCardProps = {
  data: EventDetail
}

export default function EventCard({ data }: EventCardProps) {

  const background = {
    src: "/images/bg-1.avif",
    alt: "rumah palembang"
  }

  return (
    <ScaleUp delay={0.3} requireMusic className="relative flex flex-col justify-center bg-white/80 text-center rounded-2xl shadow-md p-6 overflow-hidden">
      <div className="absolute -inset-px overflow-hidden">
        <Image
          src={background.src}
          alt={background.alt}
          fill
          priority
          className={`object-cover ${data.position}`}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-white/90" />
      </div>
      <FadeDown requireMusic delay={1} className='relative'>
        <h2 className="font-ivy-mode text-[34px]">{data.title}</h2>
      </FadeDown>
      <SeparatorIcon className='w-full relative' />
      <ScaleUp requireMusic delay={0.3} className='relative'>
        <h3 className='text-[20px]'>{data.date}</h3>
      </ScaleUp>
      <SeparatorIcon className='w-full -scale-100 relative' />
      <FadeUp requireMusic delay={0.3} className='flex items-center text-[#696969] mx-auto gap-2 relative'>
        <TimeIcon className="size-4" />
        <span className='text-sm tracking-widest'>{data.time}</span>
      </FadeUp>
      <FadeUp requireMusic delay={0.3} className='relative'>
        <p className='text-sm font-semibold text-[#696969]'>{data.place}</p>
      </FadeUp>
      <FadeUp requireMusic delay={0.3} className='relative'>
        <p className='text-sm max-w-60 mx-auto text-[#424242]'>{data.address}</p>
      </FadeUp>
      <FadeUp requireMusic delay={0.3} className='relative'>
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
