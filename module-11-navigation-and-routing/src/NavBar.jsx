import { Link, NavLink } from "react-router";

function NavBar() {
    return (
        <>
            {/* Using Link tag */}
            {/* <Link to="/">Home</Link> | {" "}
            <Link to="/about">About</Link> | {" "}
            <Link to="/products">Products</Link> */}

            {/* Using NavLink tag */}
            <NavLink
                style={({ isActive }) => ({ color: isActive ? "yellow" : "" })}
                to="/"
            >
                Home
            </NavLink>{" "}
            |{" "}
            <NavLink
                style={({ isActive }) => ({ color: isActive ? "yellow" : "" })}
                to="/about"
            >
                About
            </NavLink>{" "}
            |{" "}
            <NavLink
                style={({ isActive }) => ({ color: isActive ? "yellow" : "" })}
                to="/products"
            >
                Products
            </NavLink>
        </>
    );
}

export default NavBar;
