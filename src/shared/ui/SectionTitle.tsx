'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/shared/lib/useScrollAnimation';
import { fadeInUp } from '@/shared/lib/animations';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
};

function FlowerDivider() {
  return (
    <svg
      width="120"
      height="24"
      viewBox="0 0 120 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="12" x2="42" y2="12" stroke="#F4A0B5" strokeWidth="1" />
      <circle cx="60" cy="12" r="4" fill="#F4A0B5" opacity="0.6" />
      <ellipse cx="52" cy="10" rx="3" ry="5" fill="#F4A0B5" opacity="0.3" transform="rotate(-30 52 10)" />
      <ellipse cx="68" cy="10" rx="3" ry="5" fill="#F4A0B5" opacity="0.3" transform="rotate(30 68 10)" />
      <ellipse cx="55" cy="15" rx="3" ry="5" fill="#F4A0B5" opacity="0.25" transform="rotate(20 55 15)" />
      <ellipse cx="65" cy="15" rx="3" ry="5" fill="#F4A0B5" opacity="0.25" transform="rotate(-20 65 15)" />
      <ellipse cx="60" cy="6" rx="2.5" ry="5" fill="#F4A0B5" opacity="0.3" />
      <circle cx="60" cy="12" r="2" fill="#C48B9F" />
      <line x1="78" y1="12" x2="120" y2="12" stroke="#F4A0B5" strokeWidth="1" />
    </svg>
  );
}

export function SectionTitle({ title, subtitle, align = 'center' }: SectionTitleProps) {
  const { ref, controls } = useScrollAnimation();

  return (
    <Box
      ref={ref}
      sx={{
        textAlign: align,
        mb: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems:
          align === 'center'
            ? 'center'
            : align === 'right'
              ? 'flex-end'
              : 'flex-start',
      }}
    >
      <motion.div initial="hidden" animate={controls} variants={fadeInUp}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Cormorant Garamond", "Georgia", serif',
            fontWeight: 600,
            color: 'text.primary',
            mb: 2,
            fontSize: { xs: '2rem', md: '2.75rem' },
          }}
        >
          {title}
        </Typography>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        transition={{ delay: 0.15 }}
      >
        <Box sx={{ my: 2 }}>
          <FlowerDivider />
        </Box>
      </motion.div>

      {subtitle && (
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 560,
              mx: align === 'center' ? 'auto' : 0,
              fontSize: { xs: '0.95rem', md: '1.05rem' },
            }}
          >
            {subtitle}
          </Typography>
        </motion.div>
      )}
    </Box>
  );
}
