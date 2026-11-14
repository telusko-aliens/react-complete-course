import { useContext } from "react";
import { CartContext } from "./context/CartContext";

function Navbar() {
    const { cart } = useContext(CartContext);

    const totalItems = cart.reduce(
        (total, product) => total + product.quantity,
        0,
    );

    return (
        <nav className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
                <h1 className="text-xl font-bold tracking-tight">
                    <span className="text-indigo-600">My</span> Store
                </h1>

                <div className="flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
                    <span>Cart</span>
                    <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-indigo-600 px-1.5 text-xs text-white">
                        {totalItems}
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
