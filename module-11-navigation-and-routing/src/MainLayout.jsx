import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router";

function MainLayout() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
}

export default MainLayout;
