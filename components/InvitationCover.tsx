'use client'

import { useEffect, useState } from 'react'
import { useAnimation } from './animations/AnimationProvider'
import FadeDown from './animations/FadeDown'
import FadeLeft from './animations/FadeLeft'
import FadeRight from './animations/FadeRight'
import FadeUp from './animations/FadeUp'
import { useMusic } from './music/MusicProvider'
import { Envelope, SeparatorIcon } from '../utils/Icons'
import ScaleUp from './animations/ScaleUp'

export default function InvitationCover({ guestName }: { guestName: string }) {
  const { opened, openInvitation } = useMusic()
  const { openAnimation } = useAnimation()
  const [showCurtain, setShowCurtain] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [opened])

  const handleOpen = async () => {
    setIsClosing(true)
    openAnimation()

    await new Promise(res => setTimeout(res, 1200))
    setShowCurtain(true)

    await new Promise(res => setTimeout(res, 1200))
    await openInvitation()
  }

  if (opened) return null

  return (
    <div className={`
      fixed inset-0 z-50
      flex items-center justify-center
      h-dvh
      overflow-hidden
    `}>

      {/* ===== CONTENT ===== */}
      <div
        className={`
          relative w-full flex justify-center items-center z-10
          ${isClosing ? 'animate-fade-out-up' : ''}
        `}
      >
        <div className="
          absolute rounded-t-full rounded-b-xl border-double border-4
          w-full max-w-xs h-full mx-auto my-auto
          max-h-[calc(100vh-10rem)]
          flex flex-col justify-center items-center
          text-center gap-[2vh] min-h-[85dvh]
        ">
          <h1 className="flex items-center justify-center font-cinzel text-[12vh] leading-none">
            <FadeLeft>I</FadeLeft>
            <FadeRight>J</FadeRight>
          </h1>

          <ScaleUp>
            <SeparatorIcon className="max-w-[35vh]" />
          </ScaleUp>

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
                px-6 py-2 mt-4
                bg-white
                text-gray-500
                text-sm
                active:scale-110
                transition
                duration-300
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

      <div className={`
            fixed inset-y-0 left-0 z-5
            backdrop-blur-xs
            w-1/2 bg-linear-to-b from-0% to-gray-100
            origin-left
            ${showCurtain && ('animate-curtain-left')}
          `} />
      <div className={`
            fixed inset-y-0 right-0 z-5
            backdrop-blur-xs
            w-1/2 bg-linear-to-b from-0% to-gray-100
            origin-right
            ${showCurtain && ('animate-curtain-right')}
          `} />
    </div>
  )
}
