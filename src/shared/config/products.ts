export type ProductCategory =
  | 'flowers'
  | 'bouquets'
  | 'plants'
  | 'pots'
  | 'soil'
  | 'coffee'
  | 'toys';

export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  category: ProductCategory;
  description: string;
};

export type CategoryItem = {
  value: ProductCategory;
  label: string;
};

export const categories: CategoryItem[] = [
  { value: 'flowers', label: 'Квіти' },
  { value: 'bouquets', label: 'Букети' },
  { value: 'plants', label: 'Рослини' },
  { value: 'pots', label: 'Горщики' },
  { value: 'soil', label: 'Ґрунт' },
  { value: 'coffee', label: 'Кава' },
  { value: 'toys', label: 'Іграшки' },
];

export const products: Product[] = [
  {
    id: '1',
    title: 'Троянди «Рожевий ранок»',
    price: 850,
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&h=600&fit=crop',
    category: 'flowers',
    description: 'Ніжні рожеві троянди, зібрані зранку для максимальної свіжості.',
  },
  {
    id: '2',
    title: 'Букет «Французький шарм»',
    price: 1450,
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=600&fit=crop',
    category: 'bouquets',
    description: 'Елегантний букет у французькому стилі з піонами та евкаліптом.',
  },
  {
    id: '3',
    title: 'Монстера делікатесна',
    price: 680,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&h=600&fit=crop',
    category: 'plants',
    description: 'Тропічна рослина з великим декоративним листям.',
  },
  {
    id: '4',
    title: 'Керамічний горщик «Прованс»',
    price: 420,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop',
    category: 'pots',
    description: 'Ручної роботи керамічний горщик у стилі Прованс.',
  },
  {
    id: '5',
    title: 'Ґрунт для квіткових рослин',
    price: 145,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop',
    category: 'soil',
    description: 'Збалансований поживний ґрунт для домашніх квітів, 5 літрів.',
  },
  {
    id: '6',
    title: 'Букет «Лавандовий сон»',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&h=600&fit=crop',
    category: 'bouquets',
    description: 'Витончений букет з лаванди та польових квітів.',
  },
  {
    id: '7',
    title: 'Фікус Бенджаміна',
    price: 520,
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=600&fit=crop',
    category: 'plants',
    description: 'Вічнозелена кімнатна рослина, очищує повітря.',
  },
  {
    id: '8',
    title: 'Кава «Fleur Blend»',
    price: 290,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=600&fit=crop',
    category: 'coffee',
    description: 'Авторська суміш арабіки з квітковими нотками, 250 г.',
  },
  {
    id: '9',
    title: 'Плюшевий ведмедик «Флер»',
    price: 380,
    image: 'https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=600&h=600&fit=crop',
    category: 'toys',
    description: "М'який ведмедик у фірмовому рожевому кольорі.",
  },
  {
    id: '10',
    title: 'Тюльпани «Весняний настрій»',
    price: 650,
    image: 'https://images.unsplash.com/photo-1524386416438-98b9b2d4b433?w=600&h=600&fit=crop',
    category: 'flowers',
    description: 'Яскраві різнокольорові тюльпани з Голландії.',
  },
  {
    id: '11',
    title: 'Бетонний горщик «Лофт»',
    price: 350,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&h=600&fit=crop',
    category: 'pots',
    description: 'Мінімалістичний горщик з бетону, ручна робота.',
  },
  {
    id: '12',
    title: 'Букет «Персиковий захід»',
    price: 1680,
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&h=600&fit=crop',
    category: 'bouquets',
    description: 'Розкішний букет у персикових тонах з садовими трояндами.',
  },
  {
    id: '13',
    title: 'Сукуленти «Міні-сад»',
    price: 390,
    image: 'https://images.unsplash.com/photo-1509423381346-55f59ee19db4?w=600&h=600&fit=crop',
    category: 'plants',
    description: "Композиція з 5 різних сукулентів у дерев'яному кашпо.",
  },
  {
    id: '14',
    title: 'Кава «Rose Espresso»',
    price: 320,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=600&h=600&fit=crop',
    category: 'coffee',
    description: 'Еспресо суміш з ароматом троянди, 250 г зерно.',
  },
];
