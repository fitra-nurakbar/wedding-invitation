'use client'

import { useEffect } from 'react'
import { useAnimation } from './animation/AnimationProvider'
import FadeDown from './animation/FadeDown'
import FadeLeft from './animation/FadeLeft'
import FadeRight from './animation/FadeRight'
import FadeUp from './animation/FadeUp'
import { useMusic } from './music/MusicProvider'
import { Envelope } from './IconsMenu'

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
    <div className="
      fixed inset-0 z-50
      flex items-center justify-center
      h-dvh
      bg-linear-to-b from-gray-100 via-white to-gray-400
    ">
      <div className="
        flex flex-col justify-center items-center
        text-center
        gap-[2vh]
        px-[6vw]
        min-h-[85dvh]
      ">
        {/* Initial */}
        <h1 className="flex items-center justify-center font-cinzel text-[12vh] leading-none">
          <FadeLeft>I</FadeLeft>
          <FadeRight>J</FadeRight>
        </h1>

        <FadeDown>
          <p className="text-[1.5vh] font-roboto tracking-widest text-gray-400">
            The Wedding Of
          </p>
        </FadeDown>

        <FadeUp>
          <h2 className="text-[3.5vh] font-ivy-mode mb-[4vh]">
            Ifha & Jefri
          </h2>
        </FadeUp>

        <p className="text-[1.6vh] leading-relaxed">
          Kepada Yth. <br />
          Bapak / Ibu / Saudara / i
        </p>

        <FadeDown>
          <h3 className="text-[2.5vh] font-bold px-[5vw]">
            {guestName}
          </h3>
        </FadeDown>

        <FadeUp>
          <button
            onClick={handleOpen}
            className="
              mt-[4vh]
              px-6 py-2
              bg-white
              text-gray-500
              text-sm
              active:scale-110
              transition
              cursor-pointer
            "
          >
            <div className="flex gap-2 items-center">
              <Envelope className="size-5" />
              <span>Buka Undangan</span>
            </div>
          </button>
        </FadeUp>
      </div>
    </div>
  )
}
