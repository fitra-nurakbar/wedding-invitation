'use client'

import { supabase } from '@/utils/supabase/server'
import { useEffect, useState } from 'react'
import CommentItem from './CommentItem'

type Message = {
  id: string
  name: string
  message: string
  created_at: string
}

export default function CommentsList() {
  const [comments, setComments] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [showAll, setShowAll] = useState(false)

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

  const visibleComments = showAll ? comments : comments.slice(0, 5)

  return (
    <div className="w-full">
      {/* HEADER */}
      <div className="border-b-2 border-foreground p-2 my-6">
        <p className="font-semibold font-roboto">
          {comments.length} BEST FRIENDS WISHES
        </p>
      </div>

      {/* LIST KOMENTAR */}
      <div className="space-y-4">
        {visibleComments.map((item) => (
          <CommentItem key={item.id} item={item} />
        ))}
      </div>

      {/* BUTTON MUAT LEBIH BANYAK */}
      {comments.length > 5 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="
              text-sm text-primary
              font-medium
              hover:opacity-80
              transition
              px-5
              py-1
              border-2 border-primary
              cursor-pointer
            "
          >
            {showAll ? 'Sembunyikan' : 'Muat Lebih Banyak'}
          </button>
        </div>
      )}
    </div>
  )
}
