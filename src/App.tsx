import { Catalog } from "./pages/Catalog";
import { Cart } from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <div className="container">
      <AppContextProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Catalog/>
              }
            />
            <Route
              path="/cart"
              element={<Cart/>}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContextProvider>
    </div>
  );
}

export default App;
