'use client'

import { personalities } from "@/utils/personalityData"
import PersonCard from "./PersonCard"
import FadeUp from "../animation/FadeUp"

export default function Personality() {
    const { bride, groom } = personalities

    return (
        <section id="couple" className="bg-white text-center py-16 px-6">
            <FadeUp>
                <h3 className="text-sm text-[#777777] mb-16">Tanpa mengurangi rasa hormat dengan ini kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan kami</h3>
            </FadeUp>
            <div className="flex flex-col gap-16">
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
                    parent={bride.parent}
                />
            </div>
        </section>
    )
}