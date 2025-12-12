import { useState } from "react";
import Proposal from "./components/Proposal";
import Budget from "./components/Budget";
import Mainlayout from "./layouts/Mainlayout";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Router } from "lucide-react";

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Proposal />} />
        <Route path="budget" element={<Budget />} />
      </Route>
    ))
  return <RouterProvider router={router} />;
}

export default App;
