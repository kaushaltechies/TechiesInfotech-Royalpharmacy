import imagePath from '../../constants/imagePath';
import { BrandItem, ProductSection } from '../home/types';

export const Staticdata: ProductSection[] = [
  {
    products: [
      {
        id: '101',
        title: 'Food Supplements',
        image: imagePath.StaticFirst,
      },
      {
        id: '102',
        title: 'Mum & Baby',
        image: imagePath.StaticSecond,
      },
      {
        id: '103',
        title: 'Personal Care',
        image: imagePath.StaticThird,
      },
      {
        id: '104',
        title: 'Personal Care',
        image: imagePath.StaticFirst,
      },
      {
        id: '105',
        title: 'Personal Care',
        image: imagePath.StaticSecond,
      },
      {
        id: '106',
        title: 'Personal Care',
        image: imagePath.StaticThird,
      },
      {
        id: '107',
        title: 'Personal Care',
        image: imagePath.StaticFirst,
      },
    ],
  },
];

export const conditions = [
  {
    id: '1',
    title: 'Anxiety',
    image: require('../../assets/images/anxiety.png'),
  },
  {
    id: '2',
    title: 'Acid Reflux',
    image: require('../../assets/images/acidReflux.png'),
  },
  {
    id: '3',
    title: 'Diabetes',
    image: require('../../assets/images/diabties.png'),
  },
  {
    id: '4',
    title: 'Allergies',
    image: require('../../assets/images/Allergies.png'),
  },
];

export const trendingDeals = [
  {
    id: '1',
    title: 'MOM & Baby',
    tag: 'OFF',
    image: imagePath.StaticFirst,
  },
  {
    id: '2',
    title: 'Personal Care',
    tag: 'OFF',
    image: imagePath.StaticSecond,
  },
  {
    id: '3',
    title: 'Skin Offers',
    tag: 'OFF',
    image: imagePath.TrendOneProduct,
  },
  {
    id: '4',
    title: 'Wellness',
    tag: 'OFF',
    image: imagePath.StaticThird,
  },
];

export const fetchedProducts = [
  {
    id: '1',
    name: "Johnson's Baby Pure Petroleum Jelly 250 Gm",
    image: imagePath.ProductImageFirst,
    category: 'Baby',
    price: '0.90',
    originalPrice: '1.000',
    discount: '30%',
  },
  {
    id: '2',
    name: "Johnson's Baby Bedtime Oil 300 ml",
    image: imagePath.ProductImageSecond,
    category: 'Baby',
    price: '0.90',
    originalPrice: '1.000',
    trending: imagePath.trendingIcon,
  },
  {
    id: '3',
    name: "Johnson's Baby Bedtime Oil 300 ml",
    image: imagePath.ProductImageFirst,
    category: 'Mother Care',
    price: '0.90',
    originalPrice: '1.000',
    trending: imagePath.trendingIcon,
  },
  {
    id: '4',
    name: "Johnson's Baby Pure Petroleum Jelly 250 Gm",
    image: imagePath.ProductImageSecond,
    category: 'Baby',
    price: '0.90',
    originalPrice: '1.000',
    discount: '30%',
  },
    {
    id: '5',
    name: "Johnson's Baby Pure Petroleum Jelly 250 Gm",
    image: imagePath.ProductImageSecond,
    category: 'Baby',
    price: '0.90',
    originalPrice: '1.000',
    discount: '30%',
  },
    {
    id: '6',
    name: "Johnson's Baby Pure Petroleum Jelly 250 Gm",
    image: imagePath.ProductImageSecond,
    category: 'Baby Food',
    price: '0.90',
    originalPrice: '1.000',
    discount: '30%',
  },
];


export const dummyBrands: BrandItem[] = [
  {
    id: '1',
    name: 'ACU-LIFE',
    logo:imagePath.brandDemo1,
  },
  {
    id: '2',
    name: 'airplus',
    logo: imagePath.brandDemo2,
  },
  {
    id: '3',
    name: 'Brand X',
    logo: imagePath.brandDemo1,
  },
];

export const productCategories = [
  'Baby',
  'Pregnancy & Breastfeeding',
  'Mother Care',
  'Baby Food',
];