import { CartItem } from "./CartItem";
import "./CartContainer.css";
import { FunctionComponent, useState } from "react";
import { getTotalPrice } from "../utils/utils";

type Props = {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
  quantity: number;
}[];

export const CartContainer: FunctionComponent = () => {
  const [totalPrice, setTotalPrice] = useState(getTotalPrice());

  let cart: Props;
  cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const handleTotalPrice = (num: number) => {
    setTotalPrice((prev) => prev + num);
  }

  if (cart.length > 0) {
    return (
      <div className="cart-container">
        <p className="cart-container_title">Корзина</p>
        <div className="cart-container-items">
          {cart.map((item) => {
            return (
              <CartItem cartData={item} handleTotalPrice={handleTotalPrice} />
            );
          })}
        </div>
        <div className="cart-container-total">
          <p className="cart-container-total_text">ИТОГО</p>
          <p className="cart-container-total_price">₽ {totalPrice}</p>
          <button className="cart-container-total_button">
            Перейти к оформлению
          </button>
        </div>
      </div>
    );
  } else {
    return <h2 className="empty-cart">Корзина пуста :(</h2>;
  }
};
