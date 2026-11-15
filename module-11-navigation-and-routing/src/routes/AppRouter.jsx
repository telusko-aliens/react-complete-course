import { createBrowserRouter } from "react-router";
import { ProductDetailsLoader, ProductLoader } from "../loaders/ProductsLoader";
import MainLayout from "../MainLayout";
import Home from "../Home";
import About from "../About";
import Products from "../Products";
import ProductDetails from "../ProductDetails";
import Error from "../Error";

export const router = createBrowserRouter([
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
            {
                path: "*",
                element: <p>Page doesn't exist</p>,
            },
        ],
    },
]);
