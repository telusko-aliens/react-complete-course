import { useLoaderData } from "react-router";

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
                </div>
            ))}
        </div>
    );
}

export default Products;
