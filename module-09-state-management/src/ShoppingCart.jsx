import { useContext } from "react";
import { CartContext } from "./context/CartContext";

function ShoppingCart() {
    const { cart, dispatch } = useContext(CartContext);

    const totalItems = cart.reduce(
        (total, product) => total + product.quantity,
        0,
    );

    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            <div className="mb-6 flex items-start justify-between gap-3">
                <div>
                    <p className="text-sm font-medium text-emerald-600">YOUR SELECTION</p>
                    <h2 className="mt-1 text-2xl font-bold">Shopping Cart</h2>
                    <p className="mt-2 text-sm text-slate-500">
                        {totalItems} items in your cart
                    </p>
                </div>

                <span className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
                    {cart.length} products
                </span>
            </div>

            {cart.length > 0 ? (
                <div className="space-y-3">
                    {cart.map((product) => (
                        <div
                            key={product.id}
                            className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 p-4"
                        >
                            <div>
                                <h3 className="font-semibold">{product.name}</h3>
                                <p className="mt-1 text-sm text-slate-500">
                                    Quantity: {product.quantity}
                                </p>
                            </div>

                            <button
                                onClick={() =>
                                    dispatch({
                                        type: "removeProduct",
                                        id: product.id,
                                    })
                                }
                                className="rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="rounded-xl border border-dashed border-slate-300 py-12 text-center">
                    <p className="text-lg font-semibold text-slate-700">
                        Your cart is empty
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                        Add items to see them here.
                    </p>
                </div>
            )}

            <div className="mt-6 border-t border-slate-200 pt-5">
                <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-slate-500">Total quantity</span>
                    <span className="text-lg font-bold">{totalItems}</span>
                </div>

                <button
                    onClick={() => dispatch({ type: "clearCart" })}
                    disabled={cart.length === 0}
                    className="w-full rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    Clear Cart
                </button>
            </div>
        </section>
    );
}

export default ShoppingCart;
