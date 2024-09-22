import "./Product.css";
//import photo from '../images/1.svg';
import starIcon from "../../images/star-icon.svg";
import { FunctionComponent, useContext } from "react";
import { type ProductData } from "../utils/utils";
import { AppContext } from "../../context/AppContext";

type Props = {
  productData: ProductData;
};

export const Product: FunctionComponent<Props> = ({ productData}) => {

  const context = useContext(AppContext);
  const handlerBuy = () => {
    context?.addProduct(productData);
    context?.counter();
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
        <p className="product-info_old-price">{productData.oldPrice ? `${productData.oldPrice} ₽` : ``}</p>
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
