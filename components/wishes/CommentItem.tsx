'use client'

import { useTimeAgo } from '@/hooks/useTimeAgo'
import FadeUp from '../animation/FadeUp'
import { TimeIcon } from '../IconsMenu'

type Message = {
    id: string
    name: string
    message: string
    created_at: string
}

export default function CommentItem({ item }: { item: Message }) {
    const timeAgo = useTimeAgo(item.created_at)

    return (
        <div className="border-b border-gray-200 py-2">
            <div className="flex gap-2 items-center">
                <p className="text-xs text-primary font-semibold">{item.name}</p>
                <TimeIcon className="size-4 text-gray-400" />
                <p className="text-xs text-gray-400">{timeAgo}</p>
            </div>
            <p className="text-sm text-gray-600 py-2">{item.message}</p>
        </div>
    )
}
