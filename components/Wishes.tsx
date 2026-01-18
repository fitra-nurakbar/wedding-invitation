'use client'

import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";
import { useEffect, useState } from "react"

const images = [
  "/images/bg1.png",
  "/images/bg2.png",
]

export default function Wishes() {
  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index)
      setIndex((prev) => (prev + 1) % images.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [index])

  return (
    <section id="wishes">
      <div className="bg-white py-12 px-8">
        <div className="min-h-120 p-5 rounded-lg bg-gray-100 border-2 border-white shadow-xl">
          <h3 className="font-extralight text-2xl font-yrsa text-center border-b border-gray-200 py-2 mt-5 text-gray-500">Friends Wishes</h3>
          <div className="py-10 mb-20">
            <CommentForm />
            <CommentsList />
          </div>
        </div>
      </div>
      <div className="relative min-h-125 overflow-hidden">

        {/* Background sebelumnya */}
        <div
          className="
            absolute inset-0
            bg-cover bg-center
            transition-all duration-2500 ease-out
          "
          style={{ backgroundImage: `url(${images[prevIndex]})` }}
        />

        {/* Background baru */}
        <div
          key={index}
          className="
            absolute inset-0
            bg-cover bg-center
            transition-all duration-2500 ease-out
            animate-bg-in
          "
          style={{ backgroundImage: `url(${images[index]})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-white/0 to-[#E6E8E3]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center min-h-125 gap-2 justify-end">
          <p className="before:content-none after:content-none text-center text-[13.5px] px-5 leading-relaxed max-w-lg text-[#6f6f6f]">
            Merupakan suatu kebahagiaan dan kehormatan
            bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan
            hadir dan memberikan do'a restu kepada kedua
            mempelai.
          </p>
          <p className="text-sm font-roboto font-light tracking-widest mb-3 text-[#6e6e6e]">
            The Wedding Of
          </p>
          <h3 className="text-4xl font-yrsa mb-10 text-[#6e6e6e]">
            Ifha & Jefri
          </h3>
        </div>
      </div>
    </section>
  )
}
