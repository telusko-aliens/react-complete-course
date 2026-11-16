import { createBrowserRouter } from "react-router";
import Products from "../Products";
import { ProductDetailsLoader, ProductLoader } from "../loaders/ProductsLoader";
import ProductDetails from "../ProductDetails";
import MainLayout from "../MainLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
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
