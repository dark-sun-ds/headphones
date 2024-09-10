
import "./CartItem.css";
import minus from "../../images/minus.svg";
import inactiveMinus from "../../images/gray-minus.svg";
import plus from "../../images/plus.svg";
import deleteImg from "../../images/delete.svg";
import { FunctionComponent, useState } from "react";
import { addProduct, removeProduct } from "../utils/utils";

type Props = {
  cartData: {
    id: number;
    img: string;
    title: string;
    price: number;
    rate: number;
    quantity: number;
  };
  handleTotalPrice: Function;
};

export const CartItem: FunctionComponent<Props> = ({
  cartData,
  handleTotalPrice,
}) => {
  const [cart, setCart] = useState(cartData);
  let total = cart.price * cart.quantity;

  const handleAddProduct = () => {
    setCart(addProduct(cart));
    handleTotalPrice(cart.price);
  };

  const handleRemoveProduct = () => {
    if (cart.quantity > 1) {
      setCart(removeProduct(cart));
      handleTotalPrice(-cart.price);
    }
  };

  return (
    <div className="cart">
      <img src={`src/images/${cartData.img}`} alt="" className="cart_img" />
      <div className="cart-counter">
        <button
          className="cart-counter-minus-button"
          onClick={handleRemoveProduct}
        >
          <img
            src={cart.quantity === 1 ? inactiveMinus : minus}
            alt=""
            className="cart-counter-minus-button_img"
          />
        </button>
        <p className="cart-counter_text">{cart.quantity}</p>
        <button className="cart-counter-plus-button" onClick={handleAddProduct}>
          <img src={plus} alt="" className="cart-counter-plus-button_img" />
        </button>
      </div>
      <button className="cart-delete-button">
        <img src={deleteImg} alt="" className="cart-delete-button_img" />
      </button>
      <p className="cart_item-name">{cartData.title}</p>
      <p className="cart_item-price">{cartData.price} ₽</p>
      <p className="cart_total-price">{total} ₽</p>
    </div>
  );
};
