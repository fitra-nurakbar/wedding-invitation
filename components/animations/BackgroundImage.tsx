'use client'

import { useEffect, useState } from "react"

type Props = {
    images: string[]
    interval?: number
    overlay?: boolean
    gradient?: "linear" | "rounded"
}

export default function BackgroundImage({
    images,
    interval = 6000,
    overlay = true,
    gradient = "linear",
}: Props) {
    const [index, setIndex] = useState(0)

    // preload images
    useEffect(() => {
        images.forEach((src) => {
            const img = new Image()
            img.src = src
        })
    }, [images])

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, interval)

        return () => clearInterval(id)
    }, [images.length, interval])

    return (
        <div className="absolute inset-0 overflow-hidden">
            {images.map((src, i) => (
                <div
                    key={src}
                    className="
            absolute inset-0
            bg-cover bg-center
            transition-opacity duration-2500 ease-out
            will-change-opacity
          "
                    style={{
                        backgroundImage: `url(${src})`,
                        opacity: i === index ? 1 : 0,
                    }}
                />
            ))}

            {/* Overlay */}
            {overlay && (
                gradient === "rounded" ? (
                    <div
                        className="
              absolute inset-0
              pointer-events-none
              bg-radial from-background/20 to-background
            "
                    />
                ) : (
                    <div
                        className="
              absolute inset-0
              pointer-events-none
              bg-linear-to-b from-white/0 to-[#E6E8E3]
            "
                    />
                )
            )}
        </div>
    )
}
