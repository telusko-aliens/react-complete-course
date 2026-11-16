import { memo } from "react";
import { Link } from "react-router";

const ProductItems = memo(function ProductList({ products, user, click }) {
    console.log("productList Component rendered");
    return (
        <div className="w-full max-w-3xl">
            <h3 className="mb-6 text-center text-xl font-bold text-gray-200">
                {user.name}
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <p className="mb-3 text-lg font-semibold text-gray-800">
                            {product.title}
                        </p>

                        <p className="text-xl font-bold text-blue-600">${product.price}</p>

                        <Link
                            to={`/products/${product.id}`}
                            className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                        >
                            View Details
                        </Link>
                        <button
                            onClick={click}
                            className="mt-4 ml-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
                        >
                            Click me
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default ProductItems;
