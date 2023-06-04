import React, { useEffect, useState } from 'react';
import Homepage from './page/Homepage';
import NewDebt from './page/NewDebts';
import UpdateDebt from './page/UpdateDebts';
import initialData from './utils/initialData';
import TotalDebts from './context';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = () =>  {

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
    }
  ]);

  const [data, setData] = useState([]);

  useEffect(() => {
    localStorage.setItem('debts', JSON.stringify(initialData))
    const storedData = localStorage.getItem('debts');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);
  console.log(data)
  return (
    <TotalDebts.Provider value={data}>
      <RouterProvider router={router} />
  </TotalDebts.Provider>
  )
}

export default App;
