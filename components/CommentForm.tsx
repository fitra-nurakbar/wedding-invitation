'use client'

import { useState } from 'react'
import { submitComment } from '@/app/actions/submitComment'

export default function CommentForm() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await submitComment(name, message)

    if (res?.error) {
      alert(res.error)
    } else {
      setMessage('')
    }

    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow space-y-4"
    >
      <input
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full px-4 py-2 border rounded-lg"
      />

      <textarea
        placeholder="Ucapan"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="w-full px-4 py-2 border rounded-lg"
      />

      <button
        disabled={loading}
        className="w-full bg-blue-500 text-white py-2 rounded-lg"
      >
        {loading ? 'Mengirim...' : 'Kirim'}
      </button>
    </form>
  )
}
