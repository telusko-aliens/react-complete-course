import { useLoaderData } from "react-router";

function ProductDetails() {
    const product = useLoaderData();

    return (
        <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
            <div className="space-y-4">
                <div className="rounded-lg bg-gray-50 p-4">
                    <p className="mb-1 text-sm font-medium text-gray-500">Product ID</p>
                    <h2 className="text-lg font-semibold text-gray-800">{product.id}</h2>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                    <p className="mb-1 text-sm font-medium text-gray-500">Product Name</p>
                    <h2 className="text-lg font-semibold text-gray-800">
                        {product.title}
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
