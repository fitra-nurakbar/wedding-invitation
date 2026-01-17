'use client'

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { XMarkIcon } from './IconsMenu'

type AlertType = 'success' | 'error' | 'info'

const COLORS: Record<AlertType, string> = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  info: 'bg-sky-500',
}

export default function Alert({
  message,
  type = 'info',
  onClose,
}: {
  message: string
  type?: AlertType
  onClose: () => void
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000)
    return () => clearTimeout(timer)
  }, [onClose])

  if (typeof window === 'undefined') return null

  return createPortal(
    <div
      className={`
        fixed top-5 left-1/2 -translate-x-1/2 z-9999
        w-[90%] max-w-xs
        text-white px-4 py-3 rounded-md shadow-lg
        flex items-center justify-between
        animate-fade-in
        ${COLORS[type]}
      `}
    >
      <span className="text-sm">{message}</span>
      <button onClick={onClose}>
        <XMarkIcon className="w-4 h-4" />
      </button>
    </div>,
    document.body
  )
}
