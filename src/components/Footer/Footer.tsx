import "./Footer.css";
import vk from "../../images/VK.svg";
import telegram from "../../images/Telegram.svg";
import whatsapp from "../../images/Whatsapp.svg";
import global from "../../images/global.svg";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Footer: FunctionComponent = () => {
const navigate = useNavigate();

  return (
    <footer className="footer">
      <h2
        className="footer-logo"
        onClick={() => navigate("/", { replace: false })}
      >
        QPICK
      </h2>
      <div className="footer-menu">
        <a href="" className="footer-menu_link">
          Избранное
        </a>
        <Link to="/cart" className="footer-menu_link">
          Корзина
        </Link>
        <a
          href="https://wa.me/70000000000?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82..."
          className="footer-menu_link"
          target="_blank"
        >
          Контакты
        </a>
      </div>
      <div className="footer-service">
        <a href="" className="footer-service_link">
          Условия сервиса
        </a>
        <div className="footer-service-language">
          <img src={global} alt="" className="footer-service-language_icon" />
          <p className="footer-service-language_button active">Рус</p>
          <p className="footer-service-language_button">Eng</p>
        </div>
      </div>
      <div className="footer-media">
        <a
          href="https://vk.com/neoflex_ru?w=club155408194"
          className="footer-media-link"
          target="_blank"
        >
          <img src={vk} alt="" className="footer-media-link_icon" />
        </a>
        <a
          href="https://t.me/neoflexcareers"
          className="footer-media-link"
          target="_blank"
        >
          <img src={telegram} alt="" className="footer-media-link_icon" />
        </a>
        <a
          href="https://wa.me/70000000000?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82..."
          className="footer-media-link"
          target="_blank"
        >
          <img src={whatsapp} alt="" className="footer-media-link_icon" />
        </a>
      </div>
    </footer>
  );
};
