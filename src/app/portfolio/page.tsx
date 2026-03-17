import type { Metadata } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PortfolioGallery } from '@/widgets/portfolio-gallery';

export const metadata: Metadata = {
  title: 'Портфоліо — Fleur',
  description:
    'Портфоліо квіткового магазину Fleur. Букети, весільний декор, оформлення подій та інші наші роботи.',
};

export default function PortfolioPage() {
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
            Портфоліо
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
            Кожна робота — це історія, створена з живих квітів
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <PortfolioGallery />
        </Container>
      </Box>
    </>
  );
}
