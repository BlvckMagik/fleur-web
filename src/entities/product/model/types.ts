export type ProductCategory = 'flowers' | 'bouquets' | 'plants' | 'pots' | 'soil' | 'coffee' | 'toys';

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: ProductCategory;
  description: string;
}

export interface CategoryInfo {
  value: ProductCategory;
  label: string;
  icon: string;
}
