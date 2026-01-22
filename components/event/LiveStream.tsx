import React from 'react'
import FadeUp from '../animations/FadeUp'
import { InstagramIcon, RecordIcon } from '@/utils/Icons'

export default function LiveStream() {
    return (
        <div className=" bg-background text-center px-5 pt-5 pb-8 ">
            <FadeUp requireMusic className='flex flex-col gap-6'>
                <div className='flex items-center justify-center'>
                    <h3 className='font-semibold flex items-center gap-2'>
                        <RecordIcon className='size-4' />
                        <span>Live Streaming</span>
                    </h3>
                </div>
                <p className='text-xs'>Kami mengajak anda yang tidak bisa hadir langsung untuk bergabung pada momen spesial kami melalui siaran langsung secara virtual dengan klik tombol berikut:</p>
                <button className='text-[13px] mx-auto'>
                    <a href="https://www.instagram.com/ifhasim" target='_blank' className='bg-white text-[#727272] flex gap-2 items-center border border-[#727272] py-2 px-5'>
                        <InstagramIcon className='size-3' /> Instagram
                    </a>
                </button>
            </FadeUp>
        </div>
    )
}
