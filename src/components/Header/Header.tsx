import "./Header.css";
import fav from "../../images/favourite.svg";
import cart from "../../images/cart.svg";
import { FunctionComponent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

export const Header: FunctionComponent = () => {
  const navigate = useNavigate();
  const context = useContext(AppContext);
  let styleCart = context?.productCount
    ? "header-container-button_counter"
    : "header-container-button_counter hidden";

  return (
    <header className="header">
      <h2
        className="header_title"
        onClick={() => navigate("/", { replace: false })}
      >
        QPICK
      </h2>
      <div className="header-container">
        <button className="header-container-button">
          <img className="header-container-button_img" src={fav} alt="" />
          <div className="header-container-button_counter hidden">2</div>
        </button>
        <button
          className="header-container-button"
          onClick={() => navigate("/cart", { replace: true })}
        >
          <img className="header-container-button_img" src={cart} alt="" />

          <div className={styleCart}>{context?.productCount}</div>
        </button>
      </div>
    </header>
  );
};
