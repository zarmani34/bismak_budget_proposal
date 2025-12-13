import { useState } from "react";
import Proposal from "./components/Proposal";
import Budget from "./components/Budget";
import MainLayout from "./layouts/MainLayout";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Proposal />} />
        <Route path="budget" element={<Budget />} />
      </Route>
    ))
  return <RouterProvider router={router} />;
}

export default App;
