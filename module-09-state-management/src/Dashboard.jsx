import { useContext } from "react";
import Profile from "./Profile";
import { UserContext } from "./context/UserContext";

function Dashboard() {
    const { updateUser } = useContext(UserContext);

    return (
        <div className="rounded-xl border border-purple-200 bg-purple-50 p-5">
            <h2 className="mb-1 text-base font-semibold text-purple-700">
                Dashboard
            </h2>
            <p className="mb-4 text-sm text-slate-600"></p>
            <button
                onClick={() => updateUser("Rahul")}
                className="border border-blue-600 bg-blue-600  rounded-md text-white mb-3 p-2 cursor-pointer hover:bg-blue-700"
            >
                Update user
            </button>

            <Profile />
        </div>
    );
}

export default Dashboard;
