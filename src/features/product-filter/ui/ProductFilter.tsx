'use client';

import { Box, Chip } from '@mui/material';
import type { CategoryItem } from '@/shared/config';

interface ProductFilterProps {
  categories: CategoryItem[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const ProductFilter = ({ categories, activeCategory, onCategoryChange }: ProductFilterProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        overflowX: 'auto',
        pb: 1,
        px: 0.5,
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      <Chip
        label="Всі"
        onClick={() => onCategoryChange('all')}
        sx={{
          px: 1.5,
          fontWeight: 600,
          fontSize: '0.85rem',
          flexShrink: 0,
          bgcolor: activeCategory === 'all' ? '#d4708a' : 'rgba(212,112,138,0.08)',
          color: activeCategory === 'all' ? '#fff' : '#4A3035',
          transition: 'all 0.3s ease',
          '&:hover': {
            bgcolor: activeCategory === 'all' ? '#c4607a' : 'rgba(212,112,138,0.15)',
          },
        }}
      />
      {categories.map((cat) => (
        <Chip
          key={cat.value}
          label={cat.label}
          onClick={() => onCategoryChange(cat.value)}
          sx={{
            px: 1.5,
            fontWeight: 600,
            fontSize: '0.85rem',
            flexShrink: 0,
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
  );
};
