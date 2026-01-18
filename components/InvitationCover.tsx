'use client'

import { useEffect } from 'react'
import FadeDown from './animation/FadeDown'
import FadeLeft from './animation/FadeLeft'
import FadeRight from './animation/FadeRight'
import FadeUp from './animation/FadeUp'
import { useMusic } from './music/MusicProvider'
import { useAnimation } from './animation/AnimationProvider'

export default function InvitationCover({ guestName }: { guestName: string }) {
  const { opened, openInvitation } = useMusic()
  const { openAnimation } = useAnimation()

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [opened])

  const handleOpen = async () => {
    openAnimation()
    await openInvitation()
  }

  if (opened) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-linear-to-b from-gray-100 via-white to-gray-400">
      <div className="flex flex-col gap-2 justify-center text-center px-6 h-[calc(100vh-5rem)]">
        <h1 className="flex items-center justify-center text-9xl font-cinzel">
          <FadeLeft>I</FadeLeft>
          <FadeRight>J</FadeRight>
        </h1>

        <FadeDown>
          <p className="text-sm font-roboto tracking-widest text-gray-400">
            The Wedding Of
          </p>
        </FadeDown>

        <FadeUp>
          <h2 className="text-3xl font-yrsa mb-9">
            Ifha & Jefri
          </h2>
        </FadeUp>

        <p className="text-sm">
          Kepada Yth. <br />
          Bapak / Ibu / Saudara / i
        </p>

        <FadeDown>
          <h3 className="text-2xl font-bold px-5">
            {guestName}
          </h3>
        </FadeDown>

        <FadeUp>
          <button
            onClick={handleOpen}
            className="px-6 py-2 bg-white text-gray-500 text-sm active:scale-110 transition"
          >
            Buka Undangan
          </button>
        </FadeUp>
      </div>
    </div>
  )
}
