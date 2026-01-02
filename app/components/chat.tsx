'use client'

import { useState } from 'react'
import { supabase } from '@/utils/supabase/client'

export default function Chat() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={sendMessage}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Kirim Ucapan
        </h2>

        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Ucapan"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <button
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Mengirim...' : 'Kirim'}
        </button>
      </form>
    </div>
  )
}
