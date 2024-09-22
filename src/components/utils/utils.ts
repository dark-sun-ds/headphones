
export type ProductsInfo = {
  productsType: string;
  productsData: {
    id: number;
    img: string;
    title: string;
    price: number;
    oldPrice: number;
    rate: number;
  }[];
};
export type ProductData = {
  id: number;
  img: string;
  title: string;
  price: number;
  oldPrice: number;
  rate: number;
};

export type CartData = {
  id: number;
  img: string;
  title: string;
  price: number;
  oldPrice: number;
  rate: number;
  quantity: number;
};

