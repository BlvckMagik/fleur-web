'use client';

import { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import { useScrollAnimation } from '@/shared/lib/useScrollAnimation';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from '@/shared/lib/animations';

const variantMap: Record<string, Variants> = {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
};

type AnimatedSectionProps = {
  children: ReactNode;
  variant?: keyof typeof variantMap;
  delay?: number;
  sx?: SxProps<Theme>;
};

export function AnimatedSection({
  children,
  variant = 'fadeInUp',
  delay = 0,
  sx,
}: AnimatedSectionProps) {
  const { ref, controls } = useScrollAnimation();
  const selectedVariant = variantMap[variant] ?? fadeInUp;

  return (
    <Box sx={sx} ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={selectedVariant}
        style={{ width: '100%' }}
        transition={{ delay }}
      >
        {children}
      </motion.div>
    </Box>
  );
}
