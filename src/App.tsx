import React, { useEffect, useState, useRef } from 'react';
import Homepage from './page/Homepage';
import NewDebts from './page/NewDebts';
import initialData from './utils/initialData';
import TotalDebts from './context';

const App = () =>  {
  const [data, setData] = useState([]);

  useEffect(() => {
    localStorage.setItem('debts', JSON.stringify(initialData))
    const storedData = localStorage.getItem('debts');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);
  console.log(data)
  // data.push(newObj);
  // localStorage.setItem('myData', JSON.stringify(data));
  return (
    <TotalDebts.Provider value={data}>
      <Homepage />
      {/* <NewDebts /> */}
  </TotalDebts.Provider>
  )
}

export default App;
