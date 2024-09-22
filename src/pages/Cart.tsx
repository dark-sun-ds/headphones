import { FunctionComponent, useContext } from "react";
import { CartItem } from "../components/CartItem";
import './Cart.css'
import {AppContext} from '../context/AppContext'

export const Cart: FunctionComponent = () => {
  const context = useContext(AppContext);

  if (context?.cartItems.length > 0) {
    return (
      <div className="cart">
        <p className="cart_title">Корзина</p>
        <div className="cart-items">
          {context?.cartItems.map((item: any) => {
            return <CartItem cartData={item} />;
          })}
        </div>
        <div className="cart-total">
          <p className="cart-total_text">ИТОГО</p>
          <p className="cart-total_price">₽ {context?.getTotalPrice()}</p>
          <button className="cart-total_button">Перейти к оформлению</button>
        </div>
      </div>
    );
  } else {
    return <h2 className="empty-cart">Корзина пуста :(</h2>;
  }
};
