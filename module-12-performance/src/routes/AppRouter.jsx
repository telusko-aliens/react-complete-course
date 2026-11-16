import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import { Suspense } from "react";
import { ProductDetailsLoader, ProductLoader } from "../loaders/ProductsLoader";
import ProductDetails from "../ProductDetails";
import MainLayout from "../MainLayout";
import Home from "../Home";
const Products = lazy(() => import("../Products"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/products",
                element: (
                    <Suspense fallback={<h2>Loading Products...</h2>}>
                        <Products />
                    </Suspense>
                ),
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
