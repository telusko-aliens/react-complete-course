import { useState } from "react";
import { useLoaderData } from "react-router";
import ProductItems from "./ProductItems";

function Products() {
    const [count, setCount] = useState(0);
    const products = useLoaderData();

    /* const user = {
          name: "Naman",
      }; */

    return (
        <div className="w-full max-w-3xl py-8">
            <div className="mb-8 text-center">
                <div className="inline-flex flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-gray-200 p-6 shadow-sm">
                    <h2 className="text-2xl font-bold text-blue-600">{count}</h2>

                    <button
                        onClick={() => setCount(count + 1)}
                        className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
                    >
                        Increase
                    </button>
                </div>
            </div>

            <ProductItems products={products} />
        </div>
    );
}

export default Products;
