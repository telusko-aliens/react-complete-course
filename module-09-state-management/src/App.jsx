import { UserContext } from "./context/UserContext";
import Dashboard from "./Dashboard";
import WelcomeSection from "./WelcomeSection";

const App = () => {
  const user = {
    userName: "Naman",
    role: "Developer",
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
        <h2 className="mb-1 text-lg font-semibold text-blue-700">App</h2>

        <UserContext value={user}>
          <Dashboard />
        </UserContext>
        <WelcomeSection />
      </div>
    </div>
  );
};

export default App;
