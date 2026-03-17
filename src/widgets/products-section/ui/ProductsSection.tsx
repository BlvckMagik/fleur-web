'use client';

import Link from 'next/link';
import { Container, Grid, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { products } from '@/shared/config';
import { SectionTitle } from '@/shared/ui';
import { ProductCard } from '@/entities/product';
import { staggerContainer, fadeInUp } from '@/shared/lib';

const MotionGrid = motion.create(Grid);

export const ProductsSection = () => {
  const displayProducts = products.slice(0, 6);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#FFF5F7',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="Наші товари"
          subtitle="Найкращі квіти та аксесуари для вашого дому та подарунків"
        />

        <MotionGrid
          container
          spacing={3}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {displayProducts.map((product) => (
            <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <motion.div variants={fadeInUp} style={{ height: '100%' }}>
                <ProductCard product={product} />
              </motion.div>
            </Grid>
          ))}
        </MotionGrid>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Button
            component={Link}
            href="/products"
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderColor: '#d4708a',
              color: '#d4708a',
              borderRadius: '50px',
              px: 4,
              py: 1.2,
              fontSize: '0.95rem',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                borderColor: '#c4607a',
                bgcolor: 'rgba(212,112,138,0.06)',
              },
            }}
          >
            Переглянути всі
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
