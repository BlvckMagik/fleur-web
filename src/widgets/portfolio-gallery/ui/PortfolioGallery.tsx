'use client';

import { useState, useMemo } from 'react';
import { Container, Box, Chip } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { portfolio } from '@/shared/config';
import { SectionTitle } from '@/shared/ui';
import { PortfolioCard } from '@/entities/portfolio';
import type { PortfolioCategory } from '@/entities/portfolio';

const categories: { value: PortfolioCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'Всі' },
  { value: 'wedding', label: 'Весілля' },
  { value: 'event', label: 'Подія' },
  { value: 'gift', label: 'Подарунок' },
  { value: 'everyday', label: 'Щоденні' },
];

export const PortfolioGallery = () => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | 'all'>('all');

  const filteredItems = useMemo(
    () =>
      activeCategory === 'all'
        ? portfolio
        : portfolio.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="Наші роботи"
          subtitle="Натхнення в кожній композиції — погляньте на наші найкращі проєкти"
        />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 1,
            mb: 5,
          }}
        >
          {categories.map((cat) => (
            <Chip
              key={cat.value}
              label={cat.label}
              onClick={() => setActiveCategory(cat.value)}
              sx={{
                px: 1,
                fontWeight: 600,
                fontSize: '0.85rem',
                bgcolor:
                  activeCategory === cat.value ? '#d4708a' : 'rgba(212,112,138,0.08)',
                color: activeCategory === cat.value ? '#fff' : '#4A3035',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor:
                    activeCategory === cat.value ? '#c4607a' : 'rgba(212,112,138,0.15)',
                },
              }}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 2.5,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <PortfolioCard item={item} index={0} />
              </motion.div>
            ))}
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
};
