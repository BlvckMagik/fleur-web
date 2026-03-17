import type { Metadata } from 'next';
import { Cormorant_Garamond, Raleway } from 'next/font/google';
import { FleurThemeProvider } from '@/shared/theme';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import './globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-heading',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const raleway = Raleway({
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fleur — Квітковий магазин',
  description:
    'Fleur — квітковий магазин у Києві. Букети, композиції, декор та доставка квітів на будь-яке свято. Створюємо красу з живих квітів.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${cormorant.variable} ${raleway.variable}`}>
      <body style={{ margin: 0, background: '#FFF5F7' }}>
        <FleurThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </FleurThemeProvider>
      </body>
    </html>
  );
}
