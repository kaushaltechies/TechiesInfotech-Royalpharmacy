export interface ProductItem {
  id: string;
  title: string;
  image: string;
}

export interface ProductSection {
  products: ProductItem[];
}

export interface Product {
  id: string;
  name: string;
  image: any;
  category: string;
  price: string;
  originalPrice?: string;
  discount?: string;
}
