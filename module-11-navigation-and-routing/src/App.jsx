import About from "./About";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router";
import Products from "./Products";
import ProductDetails from "./ProductDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/products/:productId",
      element: <ProductDetails />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
