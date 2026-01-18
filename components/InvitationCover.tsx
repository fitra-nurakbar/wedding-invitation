'use client'

import { useEffect } from 'react'
import FadeDown from './animation/FadeDown'
import FadeLeft from './animation/FadeLeft'
import FadeRight from './animation/FadeRight'
import FadeUp from './animation/FadeUp'
import { useMusic } from './music/MusicProvider'

export default function InvitationCover() {
  const { opened, openInvitation } = useMusic()

  // 🔒 Lock scroll saat cover tampil
  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [opened])

  const handleOpen = async () => {
    await openInvitation()
  }

  if (opened) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-linear-to-b from-gray-100 via-white to-gray-400">
      <div className="text-center px-6 animate-fade-in justify-center">
        <h1 className="flex items-center justify-center text-9xl font-cinzel mb-5">
          <FadeLeft>I</FadeLeft>
          <FadeRight>J</FadeRight>
        </h1>

        <FadeDown>
          <p className="text-sm font-roboto font-light tracking-widest text-gray-400 mb-3">
            The Wedding Of
          </p>
        </FadeDown>

        <FadeUp>
          <h2 className="text-3xl font-yrsa mb-10">
            Ifha & Jefri
          </h2>
        </FadeUp>

        <p className="text-sm">
          Kepada Yth. <br />
          Bapak/Ibu/Saudara/i
        </p>

        <FadeDown>
          <h3 className="text-2xl font-bold my-3">Tamu</h3>
        </FadeDown>

        <FadeUp>
          <button
            onClick={handleOpen}
            className="px-6 py-2 bg-white text-gray-500 text-sm active:scale-110 transition cursor-pointer animate-scale"
          >
            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                />
              </svg>
              <span>Buka Undangan</span>
            </div>
          </button>
        </FadeUp>
      </div>
    </div>
  )
}
