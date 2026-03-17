'use client';

import { useState } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1920&q=80',
    title: 'Витончена флористика',
    subtitle: 'Створюємо неповторні композиції з найсвіжіших квітів для вашого натхнення',
  },
  {
    image: 'https://images.unsplash.com/photo-1561334126-9f0e3c498279?w=1920&q=80',
    title: 'Квіти для особливих моментів',
    subtitle: 'Кожен букет розповідає історію — дозвольте нам розповісти вашу',
  },
  {
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=1920&q=80',
    title: 'Ваша мрія в квітах',
    subtitle: 'Індивідуальний підхід до кожного замовлення та увага до найменших деталей',
  },
  {
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=1920&q=80',
    title: 'Розкіш природи',
    subtitle: 'Найкращі сезонні квіти з усього світу у вашому місті',
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      sx={{
        position: 'relative',
        height: 'calc(100vh - 70px)',
        minHeight: 500,
        '& .swiper': { height: '100%' },
        '& .swiper-pagination-bullet': {
          width: 10,
          height: 10,
          bgcolor: 'rgba(255,255,255,0.5)',
          opacity: 1,
          transition: 'all 0.3s ease',
        },
        '& .swiper-pagination-bullet-active': {
          bgcolor: '#F4A0B5',
          width: 28,
          borderRadius: 5,
        },
      }}
    >
      <Swiper
        modules={[EffectFade, Pagination, Autoplay]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        style={{ height: '100%' }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(74,48,53,0.35) 0%, rgba(74,48,53,0.55) 100%)',
                }}
              />

              <Container
                maxWidth="lg"
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <Box
                      key={index}
                      sx={{
                        maxWidth: 650,
                      }}
                    >
                      <motion.div
                        custom={0}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <Typography
                          variant="h1"
                          sx={{
                            fontFamily: '"Cormorant Garamond", serif',
                            fontWeight: 600,
                            fontSize: { xs: '2.5rem', sm: '3.2rem', md: '4rem' },
                            color: '#fff',
                            mb: 2,
                            lineHeight: 1.15,
                            textShadow: '0 2px 20px rgba(0,0,0,0.15)',
                          }}
                        >
                          {slide.title}
                        </Typography>
                      </motion.div>

                      <motion.div
                        custom={1}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <Typography
                          sx={{
                            fontSize: { xs: '1rem', md: '1.15rem' },
                            color: 'rgba(255,255,255,0.9)',
                            mb: 4,
                            lineHeight: 1.7,
                            maxWidth: 500,
                          }}
                        >
                          {slide.subtitle}
                        </Typography>
                      </motion.div>

                      <motion.div
                        custom={2}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <Button
                          variant="contained"
                          endIcon={<ArrowForwardIcon />}
                          sx={{
                            background: 'linear-gradient(135deg, #F4A0B5 0%, #d4708a 100%)',
                            color: '#fff',
                            borderRadius: '50px',
                            px: 4,
                            py: 1.5,
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            textTransform: 'none',
                            boxShadow: '0 6px 24px rgba(212,112,138,0.4)',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #e8909f 0%, #c4607a 100%)',
                              boxShadow: '0 8px 30px rgba(212,112,138,0.5)',
                              transform: 'translateY(-1px)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Замовити букет
                        </Button>
                      </motion.div>
                    </Box>
                  )}
                </AnimatePresence>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
