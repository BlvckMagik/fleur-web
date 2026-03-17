import type { Metadata } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { AnimatedSection, SectionTitle } from '@/shared/ui';

export const metadata: Metadata = {
  title: 'Контакти — Fleur',
  description:
    'Контакти квіткового магазину Fleur у Києві. Адреса, телефон, графік роботи та форма зворотного зв\'язку.',
};

export default function ContactsPage() {
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
            Контакти
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
            Ми завжди раді вас бачити та чути
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <AnimatedSection>
                <SectionTitle title="Як нас знайти" align="left" />
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    mb: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Cormorant Garamond", "Georgia", serif',
                      mb: 1,
                      color: 'text.primary',
                    }}
                  >
                    Адреса
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    м. Київ, вул. Хрещатик, 22
                  </Typography>
                </Paper>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    mb: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Cormorant Garamond", "Georgia", serif',
                      mb: 1,
                      color: 'text.primary',
                    }}
                  >
                    Телефон
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    +380 (44) 123-45-67
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    +380 (67) 890-12-34
                  </Typography>
                </Paper>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    mb: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Cormorant Garamond", "Georgia", serif',
                      mb: 1,
                      color: 'text.primary',
                    }}
                  >
                    Email
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    hello@fleur.kyiv.ua
                  </Typography>
                </Paper>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Cormorant Garamond", "Georgia", serif',
                      mb: 1,
                      color: 'text.primary',
                    }}
                  >
                    Графік роботи
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Пн — Пт: 09:00 — 21:00
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Сб — Нд: 10:00 — 20:00
                  </Typography>
                </Paper>
              </AnimatedSection>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <AnimatedSection variant="fadeInRight">
                <Box
                  sx={{
                    width: '100%',
                    height: 400,
                    borderRadius: 4,
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #FFE4E9 0%, #FDDCB5 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: '"Cormorant Garamond", "Georgia", serif',
                      color: 'text.secondary',
                      opacity: 0.6,
                    }}
                  >
                    Карта
                  </Typography>
                </Box>
              </AnimatedSection>

              <AnimatedSection delay={0.2} variant="fadeInRight">
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    mt: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: '"Cormorant Garamond", "Georgia", serif',
                      fontWeight: 600,
                      color: 'text.primary',
                      mb: 2,
                    }}
                  >
                    Напишіть нам
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Форма зворотного зв&#39;язку буде доступна найближчим часом.
                    Наразі ви можете зв&#39;язатись з нами за телефоном або
                    електронною поштою.
                  </Typography>
                </Paper>
              </AnimatedSection>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
