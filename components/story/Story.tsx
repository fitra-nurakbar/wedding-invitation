import React from 'react'
import FadeDown from '../animations/FadeDown'
import Image from 'next/image'
import ScaleUp from '../animations/ScaleUp'
import FadeUp from '../animations/FadeUp'

const storyImg = {
    src: "/images/story.webp",
    alt: "Ifha & Jefri"
}

export default function Story() {
    return (
        <section id='event'>
            <div className="relative bg-[#DFD8D1] px-5 py-10">
                <div className="bg-white/50 border-4 border-double border-[#B1996A] text-center rounded-[10px] py-10">
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
                            <p className='text-[13px] text-justify hyphens-auto'>
                                In 2021, we got to know each other. Our introduction began with a conversation about the time when I was in school and he was on a community service program (KKN) from his campus, and he was placed where I lived. Our acquaintance was brief, just friends exchanging stories from a distance.
                            </p>
                        </FadeUp>
                        <FadeUp requireMusic>
                            <h3 className='text-[14px] font-semibold tracking-widest uppercase'>
                                Our first meet
                            </h3>
                        </FadeUp>
                        <FadeUp requireMusic>
                            <p className='text-[13px] text-justify hyphens-auto'>
                                Separated by distance and time, fate intervened again, guiding our paths, deciding to meet in 2025. Amidst the chaos of the world, our first meeting felt like an unexpected moment, as if the universe had conspired to bring us together. Day by day, our bond deepened, transitioning from friendship to something deeper and more meaningful. We embarked on a journey of discovery, eager to unravel the mysteries of each other's hearts.
                            </p>
                        </FadeUp>
                        <FadeUp requireMusic>
                            <h3 className='text-[14px] font-semibold tracking-widest uppercase'>
                                Forever After
                            </h3>
                        </FadeUp>
                        <FadeUp requireMusic>
                            <p className='text-[13px] text-justify hyphens-auto'>
                                Several months of shared experiences, laughter, and tears have paved the way. We decided to unite in the most serious of relationships that is marriage.
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </div>
        </section>
    )
}
