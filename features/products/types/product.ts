export type ProductColorOptionType = {
  hexCode: string;
  imageUrl: string;
  name: string;
};

export type ProductStorageOptionType = {
  capacity: string;
  price: number;
};

export type ProductSpectsType = {
  screen: string;
  resolution: string;
  screenRefreshRate: string;
  battery: string;
  mainCamera: string;
  selfieCamera: string;
  os: string;
  processor: string;
};

export type ProductDetail = {
  basePrice: number;
  brand: string;
  colorOptions: Array<ProductColorOptionType>;
  description: string;
  id: string;
  name: string;
  rating: number;
  similarProducts: Array<any>;
  specs: ProductSpectsType;
  storageOptions: Array<ProductStorageOptionType>;
};

export type ProductCardProps = {
  product: ProductCard;
};

export type ProductCard = {
  basePrice: number;
  brand: string;
  id: string;
  imageUrl: string;
  name: string;
};
