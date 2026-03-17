'use client';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

type ProductCardProps = {
  image: string;
  title: string;
  price: number;
  category: string;
  onAddToCart?: () => void;
};

const MotionCard = motion.create(Card);

export function ProductCard({
  image,
  title,
  price,
  category,
  onAddToCart,
}: ProductCardProps) {
  return (
    <MotionCard
      whileHover={{
        scale: 1.03,
        boxShadow: '0px 12px 36px rgba(196, 139, 159, 0.22)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="260"
          image={image}
          alt={title}
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(74, 48, 53, 0.3) 0%, transparent 50%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            '&:hover': {
              opacity: 1,
            },
          }}
        />
        <Chip
          label={category}
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            color: 'text.secondary',
            fontWeight: 500,
            backdropFilter: 'blur(4px)',
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Cormorant Garamond", "Georgia", serif',
            fontWeight: 600,
            fontSize: '1.15rem',
            color: 'text.primary',
            mb: 0.5,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'primary.main',
            fontWeight: 700,
            fontSize: '1.1rem',
          }}
        >
          {price} ₴
        </Typography>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button
          variant="contained"
          fullWidth
          size="small"
          onClick={onAddToCart}
          sx={{
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
          Додати до кошика
        </Button>
      </CardActions>
    </MotionCard>
  );
}
