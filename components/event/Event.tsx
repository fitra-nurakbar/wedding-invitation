import { eventDetails } from '@/utils/eventDetails'
import FadeUp from '../animations/FadeUp'
import EventCard from './EventCard'
import LiveStream from './LiveStream'

export default function Event() {
    return (
        <section id='event'>
            <div className="relative bg-[#DFD8D1] px-5 py-10">
                <FadeUp>
                    <div className='flex items-center'>
                        <h3 className='font-ivy-mode text-[40px] mx-2.5'>Wedding</h3>
                        <span className='bg-foreground h-px w-full'></span>
                    </div>
                </FadeUp>
                <FadeUp>
                    <h3 className='text-[20px] font-amalfi ml-3.5 mb-3'>Event</h3>
                </FadeUp>
                <div className="flex flex-col gap-8">
                    {eventDetails.map((data, index) => (
                        <EventCard key={index} data={data} />
                    ))}
                </div>
            </div>
            <LiveStream />
        </section>
    )
}
