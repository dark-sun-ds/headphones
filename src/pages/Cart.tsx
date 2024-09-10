import { FunctionComponent } from "react";
import { CartContainer } from "../components/Cart";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

type Props = {cartCount: number}

export const Cart: FunctionComponent<Props> = ({cartCount}) => {
    return (
      <div className="container">
        <Header cartCount={cartCount} />
        <CartContainer />
        <Footer />
      </div>
    );
}
 
