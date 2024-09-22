import { createContext, useState } from "react";


export type ProductsInfo = {
  productsType: string;
  productsData: {
    id: number;
    img: string;
    title: string;
    price: number;
    rate: number;
  }[];
  handleCountCart: Function;
};
export type ProductData = {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
};

export type CartData = {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
  quantity: number;
};

type ContextType = {
  cartItems: any;
  productCount: number;
  addProduct: (productData: ProductData) => void;
  decreaseProduct: (cartData: CartData) => void;
  deleteProduct: (cartData: CartData) => void;
  counter: () => number;
  getTotalPrice: () => number;
  quantityOfProduct: (cartData: CartData) => any;
  findProductIndex: (productData: ProductData) => number;
};

export const AppContext = createContext<ContextType | null>(null);

export const AppContextProvider = (props: any) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  // функция которая выводит количество товаров в корзине для хедера
  const counter = () => {
    let sum = 0;
    cartItems.forEach(
      (element: { quantity: number }) => (sum += element.quantity)
    );
    return sum;
  };

  const [productCount, setProductCount] = useState(counter());

  const updateCart = (cart: CartData[]) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart);
    setProductCount(counter());
  };

  const findProductIndex = (productData: ProductData): number => {
    return cartItems.findIndex((item: CartData) => item.id === productData.id);
  };

  //добавляет товар или увеличивает количество товаров
  const addProduct = (productData: ProductData) => {
    let cart = cartItems;
    const elIndex = findProductIndex(productData);

    if (localStorage.length === 0 || elIndex === -1) {
      cart.push({ ...productData, quantity: 1 });
    } else {
      cart[elIndex].quantity += 1;
    }
    updateCart(cart);
  };

  // уменьшает количество товаров
  const decreaseProduct = (cartData: CartData) => {
    let cart = cartItems;
    const elIndex = findProductIndex(cartData);
    if (cart[elIndex].quantity > 1) {
      cart[elIndex].quantity -= 1;
      updateCart(cart);
    }
  };

  const deleteProduct = (cartData: CartData) => {
    let cart = cartItems;
    const elIndex = findProductIndex(cartData);
    console.log(elIndex);
    cart.splice(elIndex, 1);
    updateCart(cart);
  };

  //функция для подсчета общей стоимости товаров
  const getTotalPrice = () => {
    let sum = 0;
    cartItems.forEach(
      (element: { quantity: number; price: number }) =>
        (sum += element.quantity * element.price)
    );
    return sum;
  };

  const quantityOfProduct = (cartData: CartData) => {
    const elIndex = findProductIndex(cartData);
    return cartItems[elIndex]?.quantity;
  };

  const contextValue: ContextType = {
    cartItems,
    productCount,
    addProduct,
    decreaseProduct,
    deleteProduct,
    counter,
    getTotalPrice,
    quantityOfProduct,
    findProductIndex,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};
