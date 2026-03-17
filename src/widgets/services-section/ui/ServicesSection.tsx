'use client';

import { Container, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { services } from '@/shared/config';
import { SectionTitle } from '@/shared/ui';
import { ServiceCard } from '@/entities/service';
import { staggerContainer, fadeInUp } from '@/shared/lib';

const MotionGrid = motion.create(Grid);

export const ServicesSection = () => {
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
          title="Наші послуги"
          subtitle="Ми пропонуємо широкий спектр флористичних послуг для будь-якого випадку"
        />

        <MotionGrid
          container
          spacing={3}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((service, index) => (
            <Grid key={service.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <motion.div variants={fadeInUp} style={{ height: '100%' }}>
                <ServiceCard service={service} index={index} />
              </motion.div>
            </Grid>
          ))}
        </MotionGrid>
      </Container>
    </Box>
  );
};
