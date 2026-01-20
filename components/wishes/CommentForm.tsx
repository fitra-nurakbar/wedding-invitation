'use client'

import { submitComment } from '@/app/actions/submitComment'
import { useEffect, useRef, useState } from 'react'
import { PersonIcon } from '../../utils/Icons'
import Alert from '../Alert'

export default function CommentForm() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [showName, setShowName] = useState(false)

  const [alert, setAlert] = useState<{
    message: string
    type: 'success' | 'error' | 'info'
  } | null>(null)

  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  /* AUTO RESIZE TEXTAREA */
  useEffect(() => {
    if (!textareaRef.current) return
    textareaRef.current.style.height = 'auto'
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + 'px'
  }, [message])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await submitComment(name, message)

    if (res?.error) {
      setAlert({
        message: res.error,
        type: 'error',
      })
    } else {
      setAlert({
        message: 'Komentar berhasil dikirim 💌',
        type: 'success',
      })
      setMessage('')
      setShowName(false)
    }

    setLoading(false)
  }

  return (
    <>
      {/* ALERT */}
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* TEXTAREA */}
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => setShowName(true)}
          placeholder="Ucapan Selamat & doa"
          required
          rows={1}
          className="
            w-full resize-none overflow-hidden
            px-4 py-3
            border border-gray-200
            shadow-inner
            transition-all
            placeholder:text-gray-400
            focus:outline-none
          "
        />

        {/* INPUT NAMA */}
        {showName && (
          <>
            <div className="relative animate-fade-in">
              <PersonIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama"
                maxLength={20}
                required
                className="
                  w-full pl-10 pr-4 py-2
                  border border-gray-200
                  focus:outline-none
                "
              />
            </div>

            {/* BUTTON */}
            <div className="flex justify-end">
              <button
                disabled={loading}
                className="
                  px-5 py-1
                  border-2 border-primary
                  text-primary
                  hover:bg-primary hover:text-white
                  transition
                  disabled:opacity-50
                  cursor-pointer
                "
              >
                {loading ? 'Mengirim...' : 'Kirim'}
              </button>
            </div>
          </>
        )}
      </form>
    </>
  )
}
