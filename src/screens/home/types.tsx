export interface ProductItem {
  id: string;
  title: string;
  image: string;
}

export interface ProductSection {
  products: ProductItem[];
}