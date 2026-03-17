export type PortfolioCategory = 'wedding' | 'event' | 'gift' | 'everyday';

export type PortfolioItem = {
  id: string;
  title: string;
  image: string;
  category: PortfolioCategory;
  description: string;
};

export const portfolioCategories: { value: PortfolioCategory; label: string }[] = [
  { value: 'wedding', label: 'Весілля' },
  { value: 'event', label: 'Події' },
  { value: 'gift', label: 'Подарунки' },
  { value: 'everyday', label: 'Щоденні' },
];

export const portfolio: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Весілля у стилі Прованс',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    category: 'wedding',
    description: 'Ніжне оформлення весілля у лавандових та кремових тонах з польовими квітами.',
  },
  {
    id: 'p2',
    title: 'Корпоративний захід «Весна»',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
    category: 'event',
    description: 'Квіткове оформлення весняного корпоративу з тюльпанами та нарцисами.',
  },
  {
    id: 'p3',
    title: 'Подарунковий бокс «Ніжність»',
    image: 'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=800&h=600&fit=crop',
    category: 'gift',
    description: 'Елегантний подарунковий набір з піоніями, макарунами та ароматичною свічкою.',
  },
  {
    id: 'p4',
    title: 'Щоденний букет «Ранкова роса»',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800&h=600&fit=crop',
    category: 'everyday',
    description: 'Легкий повсякденний букет зі свіжих сезонних квітів.',
  },
  {
    id: 'p5',
    title: 'Весільна арка «Романтика»',
    image: 'https://images.unsplash.com/photo-1464699908537-0954e50791ee?w=800&h=600&fit=crop',
    category: 'wedding',
    description: 'Величезна квіткова арка з білих троянд та зеленого евкаліпту.',
  },
  {
    id: 'p6',
    title: 'День народження «Рожева мрія»',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&h=600&fit=crop',
    category: 'event',
    description: 'Святковий декор у рожевих тонах з повітряними кулями та квітами.',
  },
  {
    id: 'p7',
    title: 'Подарунок до 8 Березня',
    image: 'https://images.unsplash.com/photo-1524386416438-98b9b2d4b433?w=800&h=600&fit=crop',
    category: 'gift',
    description: 'Яскрава весняна композиція з тюльпанів та мімози.',
  },
  {
    id: 'p8',
    title: 'Букет нареченої «Класика»',
    image: 'https://images.unsplash.com/photo-1522057306606-8d84a0e4dab0?w=800&h=600&fit=crop',
    category: 'wedding',
    description: 'Класичний білий букет нареченої з піоновидних троянд.',
  },
  {
    id: 'p9',
    title: 'Композиція «Осінній затишок»',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&h=600&fit=crop',
    category: 'everyday',
    description: 'Тепла осіння композиція з хризантемами, сухоцвітами та гілками.',
  },
];
