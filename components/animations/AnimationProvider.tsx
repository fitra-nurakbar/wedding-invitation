'use client'

import { createContext, useContext, useState, useCallback } from 'react'

type AnimationContextType = {
  opened: boolean
  openAnimation: () => void
  reset: () => void
}

const AnimationContext = createContext<AnimationContextType | null>(null)

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(false)

  const openAnimation = useCallback(() => {
    setOpened(true)
  }, [])

  const reset = useCallback(() => {
    setOpened(false)
  }, [])

  return (
    <AnimationContext.Provider value={{ opened, openAnimation, reset }}>
      {children}
    </AnimationContext.Provider>
  )
}

export function useAnimation() {
  const ctx = useContext(AnimationContext)
  if (!ctx) {
    throw new Error('useAnimation must be used inside AnimationProvider')
  }
  return ctx
}
