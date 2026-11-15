import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import MainLayout from "./MainLayout";
import { ProductLoader } from "./loaders/ProductsLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
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
