'use client';

import { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { AnimatePresence, motion } from 'framer-motion';
import { ProductFilter } from '@/features/product-filter';
import { ProductCard, type ProductCategory } from '@/entities/product';
import { products, categories } from '@/shared/config';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <Box
        sx={{
          background: 'linear-gradient(135deg, #FFF5F7 0%, #FFE4E9 50%, #FDDCB5 100%)',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Cormorant Garamond", "Georgia", serif',
              fontWeight: 600,
              color: 'text.primary',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 2,
            }}
          >
            Каталог товарів
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 560,
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' },
            }}
          >
            Оберіть ідеальний букет для будь-якої нагоди
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 5 }}>
            <ProductFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={(cat) => setActiveCategory(cat as ProductCategory | 'all')}
            />
          </Box>

          <Grid container spacing={3}>
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <Grid
                  key={product.id}
                  size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                >
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>

          {filteredProducts.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  fontFamily: '"Cormorant Garamond", "Georgia", serif',
                }}
              >
                Товарів у цій категорії поки немає
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
}
