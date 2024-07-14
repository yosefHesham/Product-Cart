import "./App.css";
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
