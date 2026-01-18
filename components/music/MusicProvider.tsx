'use client'

import { createContext, useContext, useRef, useState } from 'react'

type MusicContextType = {
  audioRef: React.RefObject<HTMLAudioElement | null>
  playing: boolean
  opened: boolean
  openInvitation: () => Promise<void>
  toggleMusic: () => Promise<void>
}

const MusicContext = createContext<MusicContextType | null>(null)

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [opened, setOpened] = useState(false)

  const openInvitation = async () => {
    setOpened(true)

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
    <MusicContext.Provider
      value={{ audioRef, playing, opened, openInvitation, toggleMusic }}
    >
      {/* Audio HARUS di sini */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/bgm.webm" type="audio/webm" />
      </audio>

      {children}
    </MusicContext.Provider>
  )
}

export const useMusic = () => {
  const ctx = useContext(MusicContext)
  if (!ctx) {
    throw new Error('useMusic must be used inside MusicProvider')
  }
  return ctx
}
