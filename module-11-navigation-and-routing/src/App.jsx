import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import MainLayout from "./MainLayout";
import { ProductDetailsLoader, ProductLoader } from "./loaders/ProductsLoader";
import Error from "./Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Products />,
          loader: ProductLoader,
        },
        {
          path: "/products/:productId",
          element: <ProductDetails />,
          loader: ProductDetailsLoader,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
