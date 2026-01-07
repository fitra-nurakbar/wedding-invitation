'use client'

import { useRef, useState } from 'react'

export default function InvitationCover() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [open, setOpen] = useState(false)
  const [playing, setPlaying] = useState(false)

  const handleOpen = async () => {
    setOpen(true)

    if (audioRef.current) {
      audioRef.current.volume = 0.6
      await audioRef.current.play()
      setPlaying(true)
    }
  }

  const toggleMusic = async () => {
    if (!audioRef.current) return

    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      await audioRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <>
      {/* Audio */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/bgm.webm" type="audio/webm" />
      </audio>

      {/* Cover */}
      {!open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-linear-to-br from-rose-100 via-white to-rose-200">
          <div className="text-center px-6 animate-fade-in">
            <p className="text-sm tracking-widest text-gray-600 mb-3">
              Undangan Pernikahan
            </p>

            <h1 className="text-3xl md:text-5xl font-serif text-gray-800 mb-6">
              Ifha & Jefri
            </h1>

            <button
              onClick={handleOpen}
              className="px-8 py-3 bg-rose-500 text-white text-lg shadow-lg hover:bg-rose-600 active:scale-95 transition cursor-pointer"
            >
              Buka Undangan
            </button>
          </div>
        </div>
      )}

      {/* Floating Music Button */}
      {open && (
        <button
          onClick={toggleMusic}
          aria-label="Toggle music"
          className="
            fixed bottom-5 right-5 z-50
            w-14 h-14 rounded-full
            bg-rose-500 text-white
            shadow-xl
            flex items-center justify-center
            hover:bg-rose-600
            active:scale-90
            transition
            cursor-pointer
          "
        >
          {playing ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      )}
    </>
  )
}
