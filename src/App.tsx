import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from "./contexts/CartContext";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <CartProvider>
      <ProductPage></ProductPage>;
    </CartProvider>
  );
}

export default App;
