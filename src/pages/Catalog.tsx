import { Products } from "../components/Products";
import data from "../data";
import { FunctionComponent } from "react";
import "./Catalog.css";

export const Catalog: FunctionComponent= () => {
  return (
      <div className="products-wrap">
        {data.map((curData) => {
          return (
            <Products
              productsData={curData.data}
              productsType={curData.type}
            />
          );
        })}
      </div>
  );
};
