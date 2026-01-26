'use client'

import Countdown from "@/components/cover/Countdown";
import FadeUp from "../animations/FadeUp";
import FadeLeft from "../animations/FadeLeft";
import FadeRight from "../animations/FadeRight";
import BackgroundImage from "../animations/BackgroundImage";
import Image from "next/image";
import FadeDown from "../animations/FadeDown";
import { SeparatorIcon, Tent } from "@/utils/Icons";
import { useMusic } from "../music/MusicProvider";

const profile = {
  src: "/images/cover-1.webp",
  alt: "Ifha & Jefri"
}

const images = [
  "/images/cover-2.avif",
  "/images/cover-3.avif"
]

const background = {
  src: "/images/bg-1.avif",
  alt: "rumah palembang"
}

export default function Cover() {
  const { opened } = useMusic()

  return (
    <section
      id="cover"
      className="relative flex flex-col items-center justify-center overflow-visible bg-white"
    >
      <div className="relative flex flex-col items-center text-center py-10 w-full min-h-screen z-5">
        <div className={`absolute inset-0 transition-transform duration-2000 overflow-visible origin-top ${opened ? "scale-90" : "scale-150"}`}>
          <Image
            src={background.src}
            alt={background.alt}
            fill
            priority
            className="object-cover object-[46.5%_center] overflow-visible"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/50 to-white h-full w-full overflow-visible" />

        <FadeDown requireMusic once delay={3} className="relative w-full flex justify-center my-5">
          <div className="relative w-full max-w-50 max-h-75 aspect-2/4 rounded-full overflow-hidden border-7 border-double border-primary">
            <Image
              src={profile.src}
              alt={profile.alt}
              fill
              priority
              sizes="(max-width: 200px) 40vw, 300px"
              className="object-cover"
            />
          </div>
        </FadeDown>

        <FadeUp requireMusic once delay={4} className="relative">
          <p className="text-sm font-roboto font-light tracking-widest mb-3">
            The Wedding Of
          </p>
          <h2 className="text-4xl font-ivy-mode mb-10">
            Ifha & Jefri
          </h2>
          <p className="text-lg tracking-widest">Minggu, 29 Maret 2026</p>
          <SeparatorIcon className="max-w-65" />
          <h3 className="font-roboto font-light tracking-widest text-lg my-3">
            SAVE THE DATE
          </h3>
          <Countdown />
        </FadeUp>
      </div>

      <div className="relative h-100 w-full">
        <BackgroundImage images={images} gradient="rounded" />
        <Tent className="absolute w-full inset-0 z-10 -top-1 text-white" />

        <div className="relative flex flex-col items-center justify-between text-center px-5 py-10 h-full">
          <div className="relative text-white flex justify-center items-center">
            <FadeLeft requireMusic>
              <h3 className='text-7xl font-cinzel mb-5'>I</h3>
            </FadeLeft>
            <FadeRight requireMusic>
              <h3 className='text-7xl font-cinzel mt-5'>J</h3>
            </FadeRight>
          </div>

          <FadeUp requireMusic className="relative">
            <p className="text-sm/tight font-normal text-white">
              Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.
              <br /><br />
              (QS. Ar-Rum: 21)
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
