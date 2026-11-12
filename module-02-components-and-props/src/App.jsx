import "./App.css";
import Dashboard from "./Dashboard";

function App() {
  const user = {
    name: "naman",
    role: "Frontend Developer"
  }
  return (
    <>
      <Dashboard user={user} />
    </>
  );
}

export default App;
