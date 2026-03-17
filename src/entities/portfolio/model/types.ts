export type PortfolioCategory = 'wedding' | 'event' | 'gift' | 'everyday';

export interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  category: PortfolioCategory;
  description: string;
}
