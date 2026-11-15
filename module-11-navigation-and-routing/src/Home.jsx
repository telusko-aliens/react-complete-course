import { useNavigate } from "react-router";

function Home() {
    const navigate = useNavigate();

    function handleLogin() {
        navigate("/about");
    }

    function handleBack() {
        navigate(-1);
    }

    return (
        <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
            <h2 className="mb-3 text-3xl font-bold text-gray-800">
                Welcome to the website.
            </h2>

            <h2 className="mb-8 text-lg text-gray-500">This is a home page</h2>

            <div className="flex gap-4 justify-center mt-4">
                <button
                    onClick={handleLogin}
                    className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white shadow-sm transition hover:bg-blue-700"
                >
                    Login
                </button>

                <button
                    onClick={handleBack}
                    className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 font-medium text-gray-700 transition hover:bg-gray-100"
                >
                    Go back
                </button>
            </div>
        </div>
    );
}

export default Home;
