'use client'

import { personalities } from "@/utils/personalityData"
import PersonCard from "./PersonCard"
import FadeUp from "../animations/FadeUp"
import ScaleUp from "../animations/ScaleUp"
import { SeparatorIcon } from "@/utils/Icons"

export default function Personality() {
    const { bride, groom } = personalities

    return (
        <section id="couple" className="flex flex-col gap-5 bg-white text-center py-15 px-6">
            <ScaleUp requireMusic>
                <SeparatorIcon className="w-full" />
            </ScaleUp>
            <FadeUp>
                <h3 className="text-sm text-[#777777]">Tanpa mengurangi rasa hormat dengan ini kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan kami</h3>
            </FadeUp>
            <div className="flex flex-col gap-16 py-5">
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
            <FadeUp requireMusic>
                <SeparatorIcon className="w-full" />
            </FadeUp>
        </section>
    )
}