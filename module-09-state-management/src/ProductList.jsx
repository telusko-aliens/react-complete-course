import { useContext } from "react";
import { CartContext } from "./context/CartContext";

function ProductList() {
    const { cart, dispatch } = useContext(CartContext);

    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            <div className="mb-6">
                <p className="text-sm font-medium text-indigo-600">YOUR INVENTORY</p>
                <h2 className="mt-1 text-2xl font-bold">Product List</h2>
                <p className="mt-2 text-sm text-slate-500">
                    Update quantities using the controls below.
                </p>
            </div>

            <div className="space-y-4">
                {cart.map((product) => (
                    <div
                        key={product.id}
                        className="flex items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4"
                    >
                        <div className="min-w-0">
                            <h3 className="font-semibold">{product.name}</h3>
                            <p className="mt-1 text-sm text-slate-500">
                                Quantity: {product.quantity}
                            </p>
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                            <button
                                onClick={() =>
                                    dispatch({
                                        type: "decreaseQuantity",
                                        id: product.id,
                                    })
                                }
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-lg font-semibold hover:bg-slate-100"
                                aria-label={`Decrease ${product.name} quantity`}
                            >
                                −
                            </button>

                            <span className="w-6 text-center font-semibold">
                                {product.quantity}
                            </span>

                            <button
                                onClick={() =>
                                    dispatch({
                                        type: "increaseQuantity",
                                        id: product.id,
                                    })
                                }
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-lg font-semibold text-white hover:bg-indigo-700"
                                aria-label={`Increase ${product.name} quantity`}
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProductList;
