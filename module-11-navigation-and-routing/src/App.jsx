import { RouterProvider } from "react-router";

import { router } from "./routes/AppRouter";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
