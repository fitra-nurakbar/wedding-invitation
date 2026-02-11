import React from 'react'
import FadeDown from '../animations/FadeDown'
import Image from 'next/image'
import ScaleUp from '../animations/ScaleUp'
import FadeUp from '../animations/FadeUp'

const storyImg = {
    src: "/images/story.webp",
    alt: "Ifha & Jefri"
}

const background = {
    src: "/images/bg-2.avif",
    alt: "rumah palembang"
}

export default function Story() {

    return (
        <section id='event' className="relative bg-[#DFD8D1] px-5 py-10">
            <div className="absolute -inset-px overflow-hidden">
                <Image
                    src={background.src}
                    alt={background.alt}
                    fill
                    priority
                    className="object-cover object-[60_center]"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-white/40" />
            </div>
            <div className="relative bg-white/70 border-4 border-double border-[#B1996A] text-center rounded-[10px] py-10">
                <FadeUp requireMusic>
                    <h3 className='text-[#AFA69C] font-ivy-mode text-[42px]'>Ifha & Jefri</h3>
                    <h3 className='font-amalfi text-[20px] -mt-3 ml-20'>Story</h3>
                </FadeUp>
                <ScaleUp requireMusic className="w-full flex justify-center my-3">
                    <div className="relative w-full h-full max-w-71.25 max-h-47.5 aspect-3/4 rounded-tl-[150px] rounded-tr-[10px] overflow-hidden border-l-5 border-t-3 border border-primary">
                        <Image
                            src={storyImg.src}
                            alt={storyImg.alt}
                            fill
                            priority={true}
                            sizes="(max-width: 285px) 40vw, 190px"
                            className="object-cover"
                        />
                    </div>
                </ScaleUp>
                <div className="flex flex-col gap-3 px-6">
                    <FadeUp requireMusic>
                        <h3 className='text-[14px] font-semibold tracking-widest uppercase'>
                            Awal Bertemu
                        </h3>
                    </FadeUp>
                    <FadeUp requireMusic>
                        <p className='text-[13px] text-justify hyphens-auto'>
                            Kami dipertemukan dalam suatu program kegiatan kampus pada tahun 2016, berawal dari obrolan santai dan dan lama kelamaan berubah menjadi pertemenan akrab.
                        </p>
                    </FadeUp>
                    <FadeUp requireMusic>
                        <h3 className='text-[14px] font-semibold tracking-widest uppercase'>
                            Menjalin Hubungan
                        </h3>
                    </FadeUp>
                    <FadeUp requireMusic>
                        <p className='text-[13px] text-justify hyphens-auto'>
                            Perjalanan kami dipenuhi kebahagiaan, canda dan tawa. Sehingga membuat kami yakin bahwa kami diciptakan untuk saling melengkapi dan ingin melanjutkan menuju jenjang pernikahan.
                        </p>
                    </FadeUp>
                    <FadeUp requireMusic>
                        <h3 className='text-[14px] font-semibold tracking-widest uppercase'>
                            Pernikahan
                        </h3>
                    </FadeUp>
                    <FadeUp requireMusic>
                        <p className='text-[13px] text-justify hyphens-auto'>
                            Hari yang dinanti pun kini tiba. Kami siap menjalani babak baru sebagai suami dan istri, dengan restu dan doa dari keluarga kami masing-masing dan juga kerabat maupun sahabat kami semua.
                        </p>
                    </FadeUp>
                </div>
            </div>
        </section>
    )
}
