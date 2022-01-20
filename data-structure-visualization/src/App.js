import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './MyComponents/Header/Header';
import HomePage from './MyComponents/HomePage/HomePage';
import DataStructures from './MyComponents/DataStructures/DataStructures';
import Array from './MyComponents/Array/Array';
import Stack from './MyComponents/Stack/Stack';
import StackArray from './MyComponents/Stack/StackArrayImplementation/StackArray';
import ArrayTmp from './MyComponents/ArrayTmp/ArrayTmp';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/dataStructures" element={<DataStructures />}></Route>
          <Route exact path="/array" element={<Array />}></Route>
          <Route exact path="/stack" element={<Stack />}></Route>
          <Route exact path="/stack/stackArray" element={<StackArray />}></Route>
          <Route exact path="/stack/stackLL" element={<Stack />}></Route>
          <Route exact path="/advanced-dsa" element={<ArrayTmp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));


export default App;
