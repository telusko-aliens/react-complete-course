import { useReducer } from "react";
import { intialState, ShoppingReducer } from "./reducers/ShoppingReducer";

function ShoppingCart() {
    const [cart, dispatch] = useReducer(ShoppingReducer, intialState);

    return (
        <div className="flex flex-col justify-center items-center mt-1 gap-3 min-h-screen">
            <h2>Shopping Cart</h2>

            {cart.map((product) => (
                <div
                    key={product.id}
                    className="border border-white text-white p-2 rounded-xl"
                >
                    <p>
                        {product.name} — Quantity: {product.quantity}
                    </p>

                    <button
                        onClick={() =>
                            dispatch({
                                type: "increaseQuantity",
                                id: product.id,
                            })
                        }
                        className="border border-white text-black bg-amber-300 p-2 rounded-2xl cursor-pointer mr-2"
                    >
                        +
                    </button>

                    <button
                        onClick={() =>
                            dispatch({
                                type: "decreaseQuantity",
                                id: product.id,
                            })
                        }
                        className="border border-white text-black bg-amber-300 p-2 rounded-2xl cursor-pointer mr-2"
                    >
                        -
                    </button>

                    <button
                        onClick={() =>
                            dispatch({
                                type: "removeProduct",
                                id: product.id,
                            })
                        }
                        className="border border-white text-black bg-amber-300 p-2 rounded-2xl cursor-pointer mr-2"
                    >
                        Remove
                    </button>
                </div>
            ))}

            <button
                onClick={() => dispatch({ type: "clearCart" })}
                className="border border-white text-black bg-amber-300 p-2 rounded-2xl cursor-pointer mr-2"
            >
                Clear Cart
            </button>
        </div>
    );
}

export default ShoppingCart;
