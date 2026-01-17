import { useEffect, useState } from "react";
import { formatTimeAgo } from "@/utils/formatTimeAgo";

export function useTimeAgo(date: Date | string) {
    const [timeAgo, setTimeAGo] = useState(() => formatTimeAgo(date))

    useEffect(() => {
        setTimeAGo(formatTimeAgo(date))

        const interval = setInterval(() => {
            setTimeAGo(formatTimeAgo(date))
        }, 60 * 1000)

        return () => clearInterval(interval)
    }, [date])

    return timeAgo
}