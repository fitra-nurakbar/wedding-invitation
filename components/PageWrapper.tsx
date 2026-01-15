'use client';

import { useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import { useAnimationReady } from '@/context/AnimationContext';

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isReady, setIsReady } = useAnimationReady();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true); // 🔥 AKTIFKAN SEMUA ANIMASI
    }, 300); // loading + blur selesai

    return () => clearTimeout(timer);
  }, [setIsReady]);

  return (
    <>
      <LoadingScreen show={!isReady} />

      <div
        className={`transition-all duration-700 ease-out
          ${!isReady ? 'blur-md scale-105' : 'blur-0 scale-100'}
        `}
      >
        {children}
      </div>
    </>
  );
}
