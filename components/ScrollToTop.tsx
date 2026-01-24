'use client'

import { useEffect } from 'react'

export default function ScrollToTop() {
  useEffect(() => {
    // force ke paling atas
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return null
}
