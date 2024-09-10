import "./Product.css";
//import photo from '../images/1.svg';
import starIcon from "../../images/star-icon.svg";
import { FunctionComponent } from "react";
import {
  type ProductData,
  addProduct,
  counter,
} from "../utils/utils";

type Props = {
  productData: ProductData;
  handleCountCart: Function;
};

export const Product: FunctionComponent<Props> = ({ productData, handleCountCart }) => {

  const handlerBuy = () => {
    addProduct(productData);
    handleCountCart(counter());
  };

  return (
    <div className="product">
      <img
        src={require(`../../images/${productData.img}`)}
        alt=""
        className="product-image"
      />
      <div className="product-info">
        <p className="product-info_name">{productData.title}</p>
        <p className="product-info_price">{productData.price} ₽</p>
        <p className="product-info_old-price">3525 ₽</p>
        <div className="product-info-review">
          <img
            src={starIcon}
            alt="star-icon"
            className="product-info-review_star-icon"
          />
          <p className="product-info-review_rating">{productData.rate}</p>
        </div>
        <button className="product-info_button" onClick={handlerBuy}>
          Купить
        </button>
      </div>
    </div>
  );
};
