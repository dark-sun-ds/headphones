import "./Header.css";
import fav from "../../images/favourite.svg";
import cart from "../../images/cart.svg";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  cartCount: number;
};

export const Header: FunctionComponent<Props> = ({cartCount}) => {
  const navigate = useNavigate();

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
          <div className="header-container-button_counter">2</div>
        </button>
        <button
          className="header-container-button"
          onClick={() => navigate("/cart", { replace: true })}
        >
          <img className="header-container-button_img" src={cart} alt="" />
          <div className="header-container-button_counter">{cartCount}</div>
        </button>
      </div>
    </header>
  );
};
