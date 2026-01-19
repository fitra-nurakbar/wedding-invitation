'use client'

import { useMusic } from './MusicProvider'

export default function MusicButton() {
  const { opened, playing, toggleMusic } = useMusic()

  if (!opened) return null

  return (
    <div className='fixed right-0 sm:sticky bottom-50 mr-4 z-50 flex justify-end'>
      <button
        onClick={toggleMusic}
        className="
        w-10 h-10 rounded-full
        bg-linear-to-b from-white to-gray-400
        shadow-lg
        flex items-center justify-center
        active:scale-90 transition
        cursor-pointer
        max-w-xl
      "
      >
        {playing ? (
          // PAUSE
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
          </svg>
        ) : (
          // PLAY
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-0.5">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  )
}
