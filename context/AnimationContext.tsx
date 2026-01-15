'use client';

import { createContext, useContext, useState } from 'react';

type AnimationContextType = {
  isReady: boolean;
  setIsReady: (value: boolean) => void;
};

const AnimationContext = createContext<AnimationContextType | null>(null);

export function AnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isReady, setIsReady] = useState(false);

  return (
    <AnimationContext.Provider value={{ isReady, setIsReady }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimationReady() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimationReady must be used inside AnimationProvider');
  }
  return context;
}
