import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="flex justify-center p-6">
                <NavBar />
            </header>

            <main className="flex flex-1 items-center justify-center px-6 text-center">
                <Outlet />
            </main>

            <footer className="flex justify-center p-6">
                <Footer />
            </footer>
        </div>
    );
}

export default MainLayout;
