
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isHot?: boolean;
}

export enum ThemeColors {
  LIGHT_GREEN = '#B9F4A8',
  DARK_GREEN = '#2D5A27',
  ORANGE = '#F88D2D',
  BLACK = '#1a1a1a',
  WHITE = '#ffffff'
}
