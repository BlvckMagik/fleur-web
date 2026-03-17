export type NavItem = {
  label: string;
  href: string;
  icon?: string;
};

export const navigation: NavItem[] = [
  { label: 'Головна', href: '/' },
  { label: 'Каталог', href: '/products' },
  { label: 'Портфоліо', href: '/portfolio' },
  { label: 'Контакти', href: '/contacts' },
];
