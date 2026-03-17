'use client';

import { Box, Chip, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import type { PortfolioItem } from '../model';

const MotionBox = motion.create(Box);

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

const categoryLabels: Record<string, string> = {
  wedding: 'Весілля',
  event: 'Подія',
  gift: 'Подарунок',
  everyday: 'Щоденне',
};

export const PortfolioCard = ({ item, index }: PortfolioCardProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
      sx={{
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        aspectRatio: '3 / 4',
      }}
    >
      <Chip
        label={categoryLabels[item.category] ?? item.category}
        size="small"
        sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          zIndex: 2,
          bgcolor: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(8px)',
          color: '#d4708a',
          fontWeight: 600,
          fontSize: '0.72rem',
        }}
      />

      <Box
        component="img"
        src={item.image}
        alt={item.title}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.5s ease',
          '.portfolio-card:hover &': {
            transform: 'scale(1.06)',
          },
        }}
        className="portfolio-img"
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(180,60,90,0.75) 0%, transparent 60%)',
          opacity: 0,
          transition: 'opacity 0.4s ease',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          p: 2.5,
          '&:hover': {
            opacity: 1,
          },
          '&:hover ~ .portfolio-img, &:hover + img': {
            transform: 'scale(1.06)',
          },
        }}
        onMouseEnter={(e) => {
          const parent = e.currentTarget.parentElement;
          const img = parent?.querySelector('img');
          if (img) img.style.transform = 'scale(1.06)';
        }}
        onMouseLeave={(e) => {
          const parent = e.currentTarget.parentElement;
          const img = parent?.querySelector('img');
          if (img) img.style.transform = 'scale(1)';
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 700,
            fontSize: '1.2rem',
            color: '#fff',
            mb: 0.5,
          }}
        >
          {item.title}
        </Typography>
        <Typography
          sx={{
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.5,
          }}
        >
          {item.description}
        </Typography>
      </Box>
    </MotionBox>
  );
};
