'use client'

import { supabase } from '@/utils/supabase/server'
import { useEffect, useState } from 'react'
import FadeUp from './animation/FadeUp'

type Message = {
  id: string
  name: string
  message: string
  created_at: string
}

export default function CommentsList() {
  const [comments, setComments] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)

  const fetchComments = async () => {
    const { data } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false })

    setComments(data || [])
    setLoading(false)
  }

  useEffect(() => {
    fetchComments()

    const channel = supabase
      .channel('realtime-messages')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        (payload) => {
          setComments((prev) => [payload.new as Message, ...prev])
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  if (loading) {
    return <p className="text-center mt-4">Memuat komentar...</p>
  }

  return (
    <div className="max-w-md mx-auto mt-6 space-y-4">
      {comments.map((item) => (
        <FadeUp key={item.id}>
          <div
            className="bg-white p-4 rounded-xl shadow"
          >
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-600">{item.message}</p>
            <p className="text-xs text-gray-400 mt-1">
              {new Date(item.created_at).toLocaleString('id-ID')}
            </p>
          </div>
        </FadeUp>
      ))}
    </div>
  )
}
