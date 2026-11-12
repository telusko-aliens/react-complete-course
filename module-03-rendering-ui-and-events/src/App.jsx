import "./App.css";
import CourseDashboard from "./CourseDashboard";

function App() {
  return (
    <>
      <CourseDashboard isLoading={false} isError="" isAvailable={true} isEnrolled={true} isCompleted={true} />
    </>
  );
}

export default App;