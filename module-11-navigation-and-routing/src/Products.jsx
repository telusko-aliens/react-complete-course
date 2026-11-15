import { useLoaderData, Link } from "react-router";

function Products() {
    const products = useLoaderData();

    return (
        <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
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
                        className="inline-block mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                    >
                        View Details
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Products;
