'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import ScaleUp from '../animations/ScaleUp'

const images = [
    '/images/gallery-1.webp',
    '/images/gallery-1.webp',
    '/images/gallery-1.webp',
    '/images/gallery-1.webp',
]

export default function Gallery() {
    const [active, setActive] = useState<string | null>(null)

    return (
        <section id="galeri" className="py-16">
            <div className="mx-auto max-w-5xl px-4">
                {/* Title */}
                <div className="flex justify-end mb-8">
                    <div className="relative inline-block">
                        <span className="bg-white px-4 text-lg font-semibold tracking-wide">
                            Gallery
                        </span>
                        <div className="absolute right-0 top-1/2 -z-10 h-px w-64 bg-gray-300" />
                    </div>
                </div>

                {/* Video */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-10 aspect-video overflow-hidden rounded-lg shadow"
                >
                    <iframe
                        className="h-full w-full"
                        src="https://www.youtube-nocookie.com/embed/wCsRAE46jw4?autoplay=1&mute=1&controls=1"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                </motion.div>

                {/* Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                    {images.map((src, i) => (
                        <ScaleUp once
                            key={i}
                            className="relative aspect-3/4 cursor-pointer overflow-hidden"
                            
                        >
                            <Image
                                src={src}
                                alt={`Gallery ${i + 1}`}
                                fill
                                className="object-cover"
                            />
                        </ScaleUp>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {active && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                    onClick={() => setActive(null)}
                >
                    <div className="relative max-w-3xl w-full aspect-3/4">
                        <Image
                            src={active}
                            alt="Preview"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    )
}
