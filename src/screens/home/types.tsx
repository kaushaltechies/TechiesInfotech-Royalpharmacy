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

export interface BrandItem {
  id: string;
  name: string;
  logo: any;
}

export interface FirstBannerProductsProps {
  topBanner?: any;
  bottomBanner?: any;
  topthirdBanner?: any;
  topforthBanner?: any;
  topfifthBanner?: any;
  topsixthBanner?: any;
}