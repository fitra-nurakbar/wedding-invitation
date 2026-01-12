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
        <div className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-linear-to-b from-gray-100 via-white to-gray-400">
          <div className="text-center px-6 animate-fade-in justify-center">
            <h1 className='text-9xl font-cinzel mb-5'>IJ</h1>
            <p className="text-sm font-roboto font-light tracking-widest text-gray-400 mb-3">
              The Wedding Of
            </p>

            <h2 className="text-3xl font-yrsa mb-10">
              Ifha & Jefri
            </h2>

            <p className="text-sm">Kepada Yth. <br></br>
              Bapak/Ibu/Saudara/i
            </p>
            <h3 className='text-2xl font-bold my-3'>Tamu</h3>

            <button
              onClick={handleOpen}
              className="px-6 py-2 bg-white text-gray-500 text-sm active:scale-110 transition cursor-pointer animate-scale"
            >
              <div className="flex gap-1 items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                </svg>
                Buka Undangan
              </div>
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
            w-10 h-10 rounded-full
            bg-linear-to-b from-white to-gray-500 text-black
            shadow-xl
            flex items-center justify-center
            hover:bg-gray-500
            active:scale-90
            transition
            cursor-pointer
          "
        >
          {playing ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
              <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
            </svg>

          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>

          )}
        </button>
      )}
    </>
  )
}
