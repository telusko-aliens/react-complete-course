import Profile from "./Profile";

function Dashboard() {
    return (
        <div className="rounded-xl border border-purple-200 bg-purple-50 p-5">
            <h2 className="mb-1 text-base font-semibold text-purple-700">
                Dashboard
            </h2>
            <p className="mb-4 text-sm text-slate-600"></p>

            <Profile />
        </div>
    );
}

export default Dashboard;
