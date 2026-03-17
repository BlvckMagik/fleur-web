'use client';

import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import type { Product } from '../model';

const MotionCard = motion.create(Card);
const MotionBox = motion.create(Box);

interface ProductCardProps {
  product: Product;
}

const categoryLabels: Record<string, string> = {
  flowers: 'Квіти',
  bouquets: 'Букети',
  plants: 'Рослини',
  pots: 'Горщики',
  soil: 'Ґрунт',
  coffee: 'Кава',
  toys: 'Іграшки',
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <MotionCard
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      sx={{
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
        },
        bgcolor: '#fff',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <MotionBox
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            sx={{
              aspectRatio: '4 / 3',
              objectFit: 'cover',
            }}
          />
        </MotionBox>
        <Chip
          label={categoryLabels[product.category] ?? product.category}
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            bgcolor: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(8px)',
            color: '#d4708a',
            fontWeight: 600,
            fontSize: '0.75rem',
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, px: 2.5, pt: 2, pb: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600,
            fontSize: '1.2rem',
            color: '#2d2d2d',
            mb: 0.5,
            lineHeight: 1.3,
          }}
        >
          {product.title}
        </Typography>
        <Typography
          sx={{
            fontSize: '1.35rem',
            fontWeight: 700,
            color: '#d4708a',
          }}
        >
          {product.price} ₴
        </Typography>
      </CardContent>

      <CardActions sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
        <Button
          fullWidth
          variant="contained"
          startIcon={<ShoppingCartOutlinedIcon />}
          sx={{
            background: 'linear-gradient(135deg, #f0a3b5 0%, #d4708a 100%)',
            borderRadius: '12px',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '0.9rem',
            py: 1.2,
            boxShadow: '0 4px 14px rgba(212,112,138,0.3)',
            '&:hover': {
              background: 'linear-gradient(135deg, #e8909f 0%, #c4607a 100%)',
              boxShadow: '0 6px 20px rgba(212,112,138,0.4)',
            },
          }}
        >
          Додати в кошик
        </Button>
      </CardActions>
    </MotionCard>
  );
};
