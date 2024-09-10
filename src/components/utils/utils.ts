
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

export const addProduct = (productData: ProductData) => {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  let elIndex: number = cart.findIndex(
    (item: typeof productData) => item.id === productData.id
  );

  if (localStorage.length === 0) {
    cart.push({ ...productData, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("empty");
  } else {
    if (elIndex === -1) {
      cart.push({ ...productData, quantity: 1 });
    } else {
      cart[elIndex].quantity += 1;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  return cart[elIndex];
};

export const removeProduct = (cartData: CartData) => {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  let elIndex: number = cart.findIndex(
    (item: typeof cartData) => item.id === cartData.id
  );

    cartData.quantity -= 1;
    cart[elIndex].quantity -= 1;
  localStorage.setItem("cart", JSON.stringify(cart));

  return cartData;
};

// };

// export const sum = () => {

// функция которая выводит количество товаров в корзине для хедера
export const counter = () => {
  let cartArr = JSON.parse(localStorage.getItem("cart") || "[]");
  let sum = 0;
  cartArr.forEach((element: { quantity: number }) => (sum += element.quantity));
  return sum;
};

export let count: number = counter();

//функция для подсчета общей стоимости товаров
export const getTotalPrice = () => {
  let sum = 0;
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.forEach(
    (element: { quantity: number; price: number }) =>
      (sum += element.quantity * element.price)
  );
  return sum;
};
// };
