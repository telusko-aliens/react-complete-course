import { useState } from "react";
import Timer from "./Timer";

function App() {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Hide timer" : "Show timer"}
      </button>
    </div>
  );
}

export default App;
