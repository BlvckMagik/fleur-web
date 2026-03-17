'use client';

import { useRef } from 'react';
import { useInView, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

export function useScrollAnimation(threshold: number = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return { ref, isInView, controls };
}
