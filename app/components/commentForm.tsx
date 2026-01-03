'use client'

import { useState } from 'react'
import { supabase } from '@/utils/supabase/client'

export default function CommentForm() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const sendComment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !message) return

    setLoading(true)

    const { error } = await supabase
      .from('messages')
      .insert([{ name, message }])

    if (error) {
      alert('Gagal mengirim komentar')
      console.error(error)
    } else {
      setMessage('')
    }

    setLoading(false)
  }

  return (
    <form
      onSubmit={sendComment}
      className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow space-y-4"
    >
      <h2 className="text-xl font-semibold text-center">
        Kirim Ucapan
      </h2>

      <input
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg"
        required
      />

      <textarea
        placeholder="Ucapan"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg"
        required
      />

      <button
        disabled={loading}
        className="w-full bg-blue-500 text-white py-2 rounded-lg disabled:opacity-50"
      >
        {loading ? 'Mengirim...' : 'Kirim'}
      </button>
    </form>
  )
}
