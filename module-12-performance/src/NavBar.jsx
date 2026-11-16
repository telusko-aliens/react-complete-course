import { NavLink } from "react-router";

function NavBar() {
    return (
        <>
            <nav className="flex items-center gap-2 rounded-xl bg-gray-100 p-2 shadow-sm w-fit">
                <NavLink
                    className={({ isActive }) =>
                        `rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${isActive
                            ? "bg-blue-600 text-white shadow-sm"
                            : "text-gray-600 hover:bg-white hover:text-blue-600"
                        }`
                    }
                    to="/"
                >
                    Home
                </NavLink>

                <NavLink
                    className={({ isActive }) =>
                        `rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${isActive
                            ? "bg-blue-600 text-white shadow-sm"
                            : "text-gray-600 hover:bg-white hover:text-blue-600"
                        }`
                    }
                    to="/products"
                >
                    Products
                </NavLink>
            </nav>
        </>
    );
}

export default NavBar;
