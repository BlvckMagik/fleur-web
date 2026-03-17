import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { HeroSlider } from '@/widgets/hero-slider';
import { ServicesSection } from '@/widgets/services-section';
import { ProductsSection } from '@/widgets/products-section';
import { AnimatedSection, SectionTitle } from '@/shared/ui';

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <SectionTitle
              title="Про нас"
              subtitle="Ми створюємо красу з живих квітів"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Box sx={{ maxWidth: 720, mx: 'auto', textAlign: 'center' }}>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 2,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                }}
              >
                Fleur — це квітковий магазин у серці Києва, де кожен букет
                створюється з любов&#39;ю та увагою до деталей. Ми працюємо лише
                зі свіжими квітами найвищої якості, щоб ваші емоції були
                яскравими та незабутніми.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                }}
              >
                Наші флористи втілюють найсміливіші ідеї — від елегантних
                класичних букетів до авторських композицій та весільного декору.
                Даруйте радість разом із Fleur.
              </Typography>
            </Box>
          </AnimatedSection>
        </Container>
      </Box>

      <ServicesSection />

      <ProductsSection />

      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(180deg, #FFF5F7 0%, #FFE4E9 100%)',
        }}
      >
        <Container maxWidth="lg">
          <AnimatedSection>
            <SectionTitle
              title="Портфоліо"
              subtitle="Наші найкращі роботи та реалізовані проєкти"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Link href="/portfolio" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    px: 5,
                    py: 1.5,
                    fontSize: '1rem',
                  }}
                >
                  Переглянути портфоліо
                </Button>
              </Link>
            </Box>
          </AnimatedSection>
        </Container>
      </Box>
    </>
  );
}
