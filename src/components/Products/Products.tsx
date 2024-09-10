import { Product } from "../Product/Product";
import "./Products.css";
import { FunctionComponent } from "react";
import type { ProductsInfo, ProductData } from "../utils/utils";


export const Products: FunctionComponent<ProductsInfo> = ({
  productsData,
  productsType,
  handleCountCart
}) => {
  return (
    <div className="products-container">
      <p className="products-category">{productsType}</p>
      <div className="products">
        {productsData.map((product: ProductData) => {
          return (
            <Product productData={product} handleCountCart={handleCountCart} />
          );
        })}
      </div>
    </div>
  );
};
