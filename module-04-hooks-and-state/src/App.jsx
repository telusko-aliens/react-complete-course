import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    name: "Naman",
    role: "Developer",
    Address: {
      city: "Mumbai",
      country: "India",
    },
  });

  function handleValue() {
    setUser({
      ...user,
      Address: {
        ...user.Address,
        city: "Indore",
      },
      name: "Gaurav",
    });
  }
  return (
    <>
      <p>{user.name}</p>
      <button onClick={handleValue}>update the value</button>
    </>
  );
}

export default App;
