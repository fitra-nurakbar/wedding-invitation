'use client'

import { personalities } from "@/utils/personalityData"
import PersonCard from "./PersonCard"
import FadeUp from "../animations/FadeUp"
import ScaleUp from "../animations/ScaleUp"
import { SeparatorIcon } from "@/utils/Icons"
import Image from "next/image"

export default function Personality() {

    const { bride, groom } = personalities

    const background = {
        src: "/images/bg-2.avif",
        alt: "rumah adat palembang"
    }

    return (
        <section id="couple" className="relative flex flex-col gap-5 bg-white text-center py-15 px-6">
            <div className="absolute -inset-px overflow-hidden">
                <Image
                    src={background.src}
                    alt={background.alt}
                    fill
                    priority
                    className="object-cover object-[20%_center]"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-white/80" />
            </div>
            <ScaleUp requireMusic className="relative">
                <SeparatorIcon className="w-full" />
            </ScaleUp>
            <FadeUp requireMusic className="relative">
                <h3 className="text-sm text-[#777777]">Tanpa mengurangi rasa hormat dengan ini kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan kami</h3>
            </FadeUp>
            <div className="flex flex-col gap-16 py-5 relative">
                <PersonCard
                    image={bride.image}
                    name={bride.name}
                    fullName={bride.fullName}
                    born={bride.born}
                    parent={bride.parent}
                />

                <PersonCard
                    image={groom.image}
                    name={groom.name}
                    fullName={groom.fullName}
                    born={groom.born}
                    parent={groom.parent}
                />
            </div>
            <FadeUp requireMusic className="relative">
                <SeparatorIcon className="w-full" />
            </FadeUp>
        </section>
    )
}