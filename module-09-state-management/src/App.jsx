import { useReducer } from "react";
import { CartContext } from "./context/CartContext";
import { intialState, ShoppingReducer } from "./reducers/ShoppingReducer";
import ShoppingCart from "./ShoppingCart";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

const App = () => {
  const [cart, dispatch] = useReducer(ShoppingReducer, intialState);

  return (
    <CartContext value={{ cart, dispatch }}>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />

        <main className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2 md:px-6">
          <ProductList />
          <ShoppingCart />
        </main>
      </div>
    </CartContext>
  );
};

export default App;
