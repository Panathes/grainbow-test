import React, { useEffect, useState } from "react";
import Homepage from "./page/Homepage";
import NewDebt from "./page/NewDebts";
import UpdateDebt from "./page/UpdateDebts";
import initialData from "./utils/initialData";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/:id",
      element: <UpdateDebt />,
    },
    {
      path: "/add",
      element: <NewDebt />,
    },
  ]);

  const [data, setData] = useState([]);

  useEffect(() => {
    localStorage.setItem("debts", JSON.stringify(initialData));
    const storedData = localStorage.getItem("debts");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);
  return <RouterProvider router={router} />;
};

export default App;
