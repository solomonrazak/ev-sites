import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <div className="bg-[#242424] text-white w-screen h-screen min-h-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
