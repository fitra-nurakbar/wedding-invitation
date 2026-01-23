'use client'

import Countdown from "@/components/cover/Countdown";
import FadeUp from "../animations/FadeUp";
import FadeLeft from "../animations/FadeLeft";
import FadeRight from "../animations/FadeRight";
import BackgroundImage from "../animations/BackgroundImage";
import Image from "next/image";
import FadeDown from "../animations/FadeDown";
import { SeparatorIcon } from "@/utils/Icons";

const profile = {
  src: "/images/cover-1.webp",
  alt: "Ifha & Jefri"
}

const images = [
  "/images/cover-2.avif",
  "/images/cover-3.avif"
]

export default function Cover() {
  return (
    <section id="cover" className="flex flex-col items-center justify-center">
      <div className="text-center py-10 min-h-screen">
        <FadeDown requireMusic once className="w-full flex justify-center my-5">
          <div className="relative w-full max-w-50 max-h-75 aspect-2/4 rounded-full overflow-hidden border-7 border-double border-primary">
            <Image
              src={profile.src}
              alt={profile.alt}
              fill
              priority={true}
              sizes="(max-width: 200px) 40vw, 300px"
              className="object-cover"
            />
          </div>
        </FadeDown>
        <FadeUp requireMusic once delay={1} >
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
      <div className="relative h-125">
        <BackgroundImage images={images} gradient="rounded" />
        <div className="relative flex flex-col items-center justify-between text-center px-5 py-10 h-full">
          <div className="text-white flex justify-center items-center">
            <FadeLeft requireMusic>
              <h3 className='text-7xl font-cinzel mb-5'>I</h3>
            </FadeLeft>
            <FadeRight requireMusic>
              <h3 className='text-7xl font-cinzel mt-5'>J</h3>
            </FadeRight>
          </div>
          <FadeUp requireMusic>
            <p className="text-sm text-white">
              <q>Dan di antara tanda-tanda (kebesaran)-
                Nya ialah Dia menciptakan pasangan-
                pasangan untukmu dari jenismu sendiri,
                agar kamu cenderung dan merasa
                tenteram kepadanya, dan Dia menjadikan
                di antaramu rasa kasih dan sayang.</q>
              <br />
              <br />
              (QS. Ar-Rum: 21)
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
