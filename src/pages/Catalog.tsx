import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Products } from "../components/Products";
import data from "../data";
import { FunctionComponent } from "react";
import "./Catalog.css";

// const  headphones, wirelessHeadphones  = data[0], data[1];

type Props = {
  cartCount: number;
  handleCountCart: Function;
};

export const Catalog: FunctionComponent<Props> = ({
  cartCount,
  handleCountCart,
}) => {
  return (
    <div className="container">
      <Header cartCount={cartCount} />
      <div className="products-wrap">
        {data.map((curData) => {
          return (
            <Products
              productsData={curData.data}
              productsType={curData.type}
              handleCountCart={handleCountCart}
            />
          );
        })}

      </div>

      <Footer />
    </div>
  );
};
