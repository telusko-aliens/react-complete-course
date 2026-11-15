import { Outlet, useNavigation } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

function MainLayout() {
    const navigate = useNavigation();
    const loading = navigate.state === 'loading';
    return (
        <div className="min-h-screen flex flex-col">
            <header className="flex justify-center p-6">
                <NavBar />
            </header>

            <main className="flex flex-1 items-center justify-center px-6 text-center">
                {loading && (
                    <div className=" flex rounded-2xl border border-gray-200 bg-white px-8 py-6 text-center shadow-lg">
                        <p className="animate-pulse text-lg font-semibold text-blue-600">
                            Loading products...
                        </p>
                    </div>
                )}
                <Outlet />
            </main>

            <footer className="flex justify-center p-6">
                <Footer />
            </footer>
        </div>
    );
}

export default MainLayout;
