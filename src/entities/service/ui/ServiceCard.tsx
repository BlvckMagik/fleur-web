'use client';

import { Box, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ParkIcon from '@mui/icons-material/Park';
import type { Service } from '../model';

const MotionCard = motion.create(Card);

const iconMap: Record<string, React.ElementType> = {
  LocalFlorist: LocalFloristIcon,
  Celebration: CelebrationIcon,
  CardGiftcard: CardGiftcardIcon,
  LocalShipping: LocalShippingIcon,
  Favorite: FavoriteIcon,
  Park: ParkIcon,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const IconComponent = iconMap[service.icon];

  return (
    <MotionCard
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
      whileHover={{ scale: 1.03 }}
      sx={{
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
        border: '1px solid rgba(212,112,138,0.12)',
        bgcolor: '#fff',
        height: '100%',
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: '0 8px 30px rgba(212,112,138,0.15)',
        },
      }}
    >
      <CardContent sx={{ p: 3.5, textAlign: 'center' }}>
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 2.5,
          }}
        >
          {IconComponent && (
            <IconComponent sx={{ fontSize: 32, color: '#C48B9F' }} />
          )}
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 700,
            fontSize: '1.25rem',
            color: '#2d2d2d',
            mb: 1.5,
          }}
        >
          {service.title}
        </Typography>

        <Typography
          sx={{
            fontSize: '0.95rem',
            color: '#777',
            lineHeight: 1.7,
          }}
        >
          {service.description}
        </Typography>
      </CardContent>
    </MotionCard>
  );
};
