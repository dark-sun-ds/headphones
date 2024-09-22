import "./CartItem.css";
import minus from "../../images/minus.svg";
import inactiveMinus from "../../images/gray-minus.svg";
import plus from "../../images/plus.svg";
import deleteImg from "../../images/delete.svg";
import { FunctionComponent, useContext } from "react";
import { AppContext } from "../../context/AppContext";

type Props = {
  cartData: {
    id: number;
    img: string;
    title: string;
    price: number;
    rate: number;
    quantity: number;
  };
};

export const CartItem: FunctionComponent<Props> = ({ cartData }) => {
  const context = useContext(AppContext);
  return (
    <div className="cart-item">
      <img
        src={require(`../../images/${cartData.img}`)}
        alt=""
        className="cart-item_img"
      />
      <div className="cart-item-counter">
        <button
          className="cart-item-counter-minus-button"
          onClick={() => {
            context?.decreaseProduct(cartData);
            // getQuantity(cartData);
          }}
        >
          <img
            src={cartData.quantity === 1 ? inactiveMinus : minus}
            alt=""
            className="cart-item-counter-minus-button_img"
          />
        </button>
        <p className="cart-item-counter_text">{cartData.quantity}</p>
        <button
          className="cart-item-counter-plus-button"
          onClick={() => {
            context?.addProduct(cartData);
          }}
        >
          <img
            src={plus}
            alt=""
            className="cart-item-counter-plus-button_img"
          />
        </button>
      </div>
      <button className="cart-item-delete-button">
        <img
          onClick={() => context?.deleteProduct(cartData)}
          src={deleteImg}
          alt=""
          className="cart-item-delete-button_img"
        />
      </button>
      <p className="cart-item_item-name">{cartData.title}</p>
      <p className="cart-item_item-price">{cartData.price} ₽</p>
      <p className="cart-item_total-price">
        {cartData.quantity * cartData.price} ₽
      </p>
    </div>
  );
};
