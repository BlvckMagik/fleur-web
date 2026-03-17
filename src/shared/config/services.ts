export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
};

export const services: Service[] = [
  {
    id: 'floristry',
    title: 'Флористика',
    description:
      'Створюємо унікальні квіткові композиції для будь-якого випадку — від ніжних букетів до масштабних інсталяцій.',
    icon: 'LocalFlorist',
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&h=600&fit=crop',
  },
  {
    id: 'event-decor',
    title: 'Декор подій',
    description:
      'Оформлюємо святкові події квітами та декором — дні народження, корпоративи, ювілеї.',
    icon: 'Celebration',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
  },
  {
    id: 'gift-compositions',
    title: 'Подарункові композиції',
    description:
      'Збираємо подарункові бокси з квітами, солодощами та іграшками для особливих моментів.',
    icon: 'CardGiftcard',
    image: 'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=800&h=600&fit=crop',
  },
  {
    id: 'delivery',
    title: 'Доставка квітів',
    description:
      'Доставляємо свіжі квіти по всьому місту протягом 2 годин з моменту замовлення.',
    icon: 'LocalShipping',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&h=600&fit=crop',
  },
  {
    id: 'wedding',
    title: 'Оформлення весіль',
    description:
      'Повне квіткове оформлення весілля — від букету нареченої до декору банкетного залу.',
    icon: 'Favorite',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
  },
  {
    id: 'greening',
    title: 'Озеленення приміщень',
    description:
      'Підбираємо та доглядаємо за рослинами у вашому офісі, ресторані чи домі.',
    icon: 'Park',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=800&h=600&fit=crop',
  },
];
