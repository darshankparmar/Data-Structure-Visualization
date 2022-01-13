import './App.css';
import ReactDOM from "react-dom";
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './MyComponents/Header/Header';
import Dashboard from './MyComponents/Dashboard/Dashboard';
import Array from './MyComponents/Array/Array';
import BarChart from './MyComponents/Temp/BarChart';

const datas = [
  [10, 30, 40, 20],
  [10, 40, 30, 20, 50, 10],
  [60, 30, 40, 20, 30]
]
var i = 0;

function App() {
<<<<<<< HEAD
=======
  const [data, setData] = useState([]);

    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {
        setData(datas[i++]);
        if(i === datas.length) i = 0;
    }
>>>>>>> 7862697a85eee6f823695c82409bb24fa01105f7

  return (
    <>
      <BrowserRouter>
        <Header />
        <button onClick={changeData}>Change Data</button>
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path="/array" element={<Array />}></Route>
          <Route exact path="/BarChart" element={<BarChart width={600} height={400} data={data} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));


export default App;
