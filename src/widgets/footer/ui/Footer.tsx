import Link from 'next/link';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { navigation } from '@/shared/config';

export const Footer = () => {
  return (
    <Box component="footer">
      <Box
        component="svg"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        sx={{
          display: 'block',
          width: '100%',
          height: { xs: 30, md: 50 },
          fill: 'none',
        }}
      >
        <path
          d="M0,60 C240,10 480,40 720,25 C960,10 1200,45 1440,20 L1440,60 L0,60 Z"
          fill="#FFF0F3"
        />
        <path
          d="M0,60 C360,25 720,50 1080,30 C1260,20 1380,35 1440,30 L1440,60 L0,60 Z"
          fill="#FFEAEF"
          opacity="0.6"
        />
      </Box>

      <Box
        sx={{
          background: 'linear-gradient(180deg, #FFEAEF 0%, #F8D4DC 100%)',
          pt: { xs: 4, md: 6 },
          pb: 3,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <LocalFloristIcon sx={{ color: '#d4708a', fontSize: 28 }} />
                <Typography
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontStyle: 'italic',
                    fontWeight: 700,
                    fontSize: '1.8rem',
                    color: '#4A3035',
                  }}
                >
                  Fleur
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: '0.95rem',
                  color: '#7D5A63',
                  lineHeight: 1.7,
                  maxWidth: 300,
                }}
              >
                Витончена флористика для ваших найважливіших моментів. Кожен букет — це історія кохання до краси.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  color: '#4A3035',
                  mb: 2,
                }}
              >
                Навігація
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {navigation.map((item) => (
                  <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
                    <Typography
                      sx={{
                        fontSize: '0.9rem',
                        color: '#7D5A63',
                        transition: 'color 0.3s ease',
                        '&:hover': { color: '#d4708a' },
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  color: '#4A3035',
                  mb: 2,
                }}
              >
                Контакти
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneIcon sx={{ fontSize: 18, color: '#d4708a' }} />
                  <Typography sx={{ fontSize: '0.9rem', color: '#7D5A63' }}>
                    +380 (44) 123-45-67
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmailIcon sx={{ fontSize: 18, color: '#d4708a' }} />
                  <Typography sx={{ fontSize: '0.9rem', color: '#7D5A63' }}>
                    hello@fleur.ua
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOnIcon sx={{ fontSize: 18, color: '#d4708a' }} />
                  <Typography sx={{ fontSize: '0.9rem', color: '#7D5A63' }}>
                    м. Київ, вул. Хрещатик, 22
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 0.5, mt: 2.5 }}>
                <IconButton
                  href="https://instagram.com"
                  target="_blank"
                  sx={{
                    color: '#d4708a',
                    transition: 'transform 0.3s ease, color 0.3s ease',
                    '&:hover': { color: '#c4607a', transform: 'scale(1.1)' },
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  href="https://facebook.com"
                  target="_blank"
                  sx={{
                    color: '#d4708a',
                    transition: 'transform 0.3s ease, color 0.3s ease',
                    '&:hover': { color: '#c4607a', transform: 'scale(1.1)' },
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  href="https://t.me"
                  target="_blank"
                  sx={{
                    color: '#d4708a',
                    transition: 'transform 0.3s ease, color 0.3s ease',
                    '&:hover': { color: '#c4607a', transform: 'scale(1.1)' },
                  }}
                >
                  <TelegramIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3, borderColor: 'rgba(212,112,138,0.2)' }} />

          <Typography
            sx={{
              textAlign: 'center',
              fontSize: '0.85rem',
              color: '#7D5A63',
            }}
          >
            Зроблено з любов&apos;ю · Fleur © {new Date().getFullYear()}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};
