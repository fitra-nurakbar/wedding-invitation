'use client'


import CommentForm from "./CommentForm"
import CommentsList from "./CommentsList"
import BackgroundImage from "../animation/BackgroundImage"

const images = [
  "/images/wishes-1.avif",
  "/images/wishes-2.avif",
]

export default function Wishes() {
  return (
    <section id="wishes">
      {/* FORM */}
      <div className="bg-white py-12 px-8">
        <div className="min-h-120 p-5 rounded-lg bg-gray-100 border-2 border-white shadow-xl">
          <h3 className="font-extralight text-2xl font-ivy-mode text-center border-b border-gray-200 py-2 mt-5 text-gray-500">
            Friends Wishes
          </h3>

          <div className="py-10 mb-20">
            <CommentForm />
            <CommentsList />
          </div>
        </div>
      </div>

      {/* BACKGROUND SECTION */}
      <div className="relative min-h-125">
        <BackgroundImage images={images} />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center min-h-125 gap-2 justify-end">
          <p className="text-center text-[13.5px] px-5 leading-relaxed max-w-lg text-[#6f6f6f]">
            Merupakan suatu kebahagiaan dan kehormatan
            bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan
            hadir dan memberikan do'a restu kepada kedua
            mempelai.
          </p>

          <p className="text-sm font-roboto font-light tracking-widest mb-3 text-[#6e6e6e]">
            The Wedding Of
          </p>

          <h3 className="text-4xl font-ivy-mode mb-10 text-[#6e6e6e]">
            Ifha & Jefri
          </h3>
        </div>
      </div>
    </section>
  )
}
