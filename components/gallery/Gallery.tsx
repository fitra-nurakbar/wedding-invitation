'use client'

import { AnimatePresence, motion, PanInfo } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import ScaleUp from '../animations/ScaleUp'
import FadeUp from '../animations/FadeUp'

const images = [
    '/images/gallery.webp',
    '/images/gallery-1.webp',
    '/images/gallery-2.webp',
    '/images/gallery-3.webp',
    '/images/gallery-4.webp',
    '/images/gallery-5.webp',
    '/images/gallery-6.webp',
    '/images/gallery-7.webp',
    '/images/gallery-8.webp',
    '/images/gallery-9.webp',
    '/images/gallery-10.webp',
    '/images/gallery-11.webp',
    '/images/gallery-12.webp',
    '/images/gallery-13.webp',
]

const HERO_INTERVAL = 7;

const heroIndexes = images
    .map((_, i) => i)
    .filter((i) => i % HERO_INTERVAL === 0)


const swipeThreshold = 80

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction > 0 ? '-100%' : '100%',
        opacity: 0,
    }),
}

export default function Gallery() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const [direction, setDirection] = useState<1 | -1>(1)
    const [zoomed, setZoomed] = useState(false)
    const [zoomOrigin, setZoomOrigin] = useState({ x: '50%', y: '50%' })

    const paginate = (dir: 1 | -1) => {
        if (activeIndex === null) return
        setDirection(dir)
        setZoomed(false)

        setActiveIndex((prev) =>
            prev === null ? 0 : (prev + dir + images.length) % images.length
        )
    }

    const handleDragEnd = (_: any, info: PanInfo) => {
        if (info.offset.x < -swipeThreshold) paginate(1)
        if (info.offset.x > swipeThreshold) paginate(-1)
    }

    const handleZoomToggle = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()

        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100

        setZoomOrigin({ x: `${x}%`, y: `${y}%` })
        setZoomed((z) => !z)
    }

    return (
        <section id="gallery" className="bg-[#DFD8D1] text-[#787878]">
            <div className="mx-auto max-w-5xl pt-3 px-3 pb-15">
                <FadeUp requireMusic className="pt-3 pb-12">
                    <div className="flex items-center">
                        <span className="flex-1 bg-foreground h-px" />
                        <h3 className="flex-1 text-right italic font-ivy-mode text-[40px] mr-5">
                            Gallery
                        </h3>
                    </div>
                </FadeUp>

                <div className="grid gap-1">
                    {heroIndexes.map((heroIndex) => {
                        const heroSrc = images[heroIndex]
                        const collageImages = images.slice(
                            heroIndex + 1,
                            heroIndex + HERO_INTERVAL
                        )

                        return (
                            <div key={heroIndex} className="grid gap-1">
                                <ScaleUp once className="cursor-pointer">
                                    <Image
                                        src={heroSrc}
                                        alt="Hero"
                                        width={1200}
                                        height={800}
                                        priority
                                        className="w-full h-auto rounded-xs"
                                        onClick={() => setActiveIndex(heroIndex)}
                                    />
                                </ScaleUp>
                                {collageImages.length > 0 && (
                                    <div className="columns-2 gap-1 space-y-1">
                                        {collageImages.map((src, i) => {
                                            const realIndex = heroIndex + 1 + i

                                            return (
                                                <ScaleUp
                                                    once
                                                    key={realIndex}
                                                    className="break-inside-avoid cursor-pointer"
                                                    onClick={() => setActiveIndex(realIndex)}
                                                >
                                                    <Image
                                                        src={src}
                                                        alt={`Gallery ${realIndex + 1}`}
                                                        width={800}
                                                        height={1200}
                                                        priority
                                                        className="w-full h-auto rounded-xs"
                                                    />
                                                </ScaleUp>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>

            {activeIndex !== null && (
                <ScaleUp
                    duration={0.3}
                    className="fixed inset-0 z-60 bg-black/80 flex items-center justify-center max-w-sm sm:rounded-xl sm:border-4 sm:border-transparent overflow-hidden sm:my-4 sm:h-[calc(100vh-2rem)] mx-auto"
                    onClick={() => {
                        setActiveIndex(null)
                        setZoomed(false)
                    }}
                >
                    <div
                        className="relative w-full max-w-sm h-full sm:my-4 sm:rounded-xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => {
                                setActiveIndex(null)
                                setZoomed(false)
                            }}
                            className="absolute right-4 top-4 z-60 text-white text-xl cursor-pointer"
                        >
                            ✕
                        </button>

                        <div className="absolute left-4 top-4 z-60 text-sm text-white">
                            {activeIndex + 1} / {images.length}
                        </div>

                        <button
                            onClick={() => paginate(-1)}
                            className="absolute left-0 top-1/2 z-60 -translate-y-1/2 bg-black/50 px-5 py-3 text-white cursor-pointer"
                        >
                            ‹
                        </button>
                        <button
                            onClick={() => paginate(1)}
                            className="absolute right-0 top-1/2 z-60 -translate-y-1/2 bg-black/50 px-5 py-3 text-white cursor-pointer"
                        >
                            ›
                        </button>

                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={activeIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: 'spring', stiffness: 260, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                                drag={zoomed ? false : 'x'}
                                dragConstraints={{ left: -300, right: 300 }}
                                dragElastic={0.25}
                                onDragEnd={handleDragEnd}
                                className={`absolute inset-0 flex items-center justify-center ${zoomed
                                    ? 'cursor-zoom-out'
                                    : 'cursor-grab active:cursor-grabbing'
                                    }`}
                                onDoubleClick={handleZoomToggle}
                            >
                                <div
                                    className="relative w-full h-full transition-transform duration-300"
                                    style={{
                                        transformOrigin: `${zoomOrigin.x} ${zoomOrigin.y}`,
                                        transform: zoomed ? 'scale(2)' : 'scale(1)',
                                    }}
                                >
                                    <Image
                                        src={images[activeIndex]}
                                        alt="Preview"
                                        fill
                                        className="object-contain select-none"
                                        priority
                                        draggable={false}
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </ScaleUp>
            )}
        </section>
    )
}
