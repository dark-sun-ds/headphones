import { useState } from "react";
import "./App.css";
import { Catalog } from "./pages/Catalog";

import { counter } from "./components/utils/utils";
import { Cart } from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [countCart, setCountCart] = useState(counter());

  const handleCountCart = (num: number) => {
    setCountCart(num);
  };

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/"
            element={
              <Catalog
                cartCount={countCart}
                handleCountCart={handleCountCart}
              />
            }
          />
          <Route path="cart" element={<Cart cartCount={countCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
