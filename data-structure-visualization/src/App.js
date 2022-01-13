import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './MyComponents/Header/Header';
import Dashboard from './MyComponents/Dashboard/Dashboard';
import Array from './MyComponents/Array/Array';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path="/array" element={<Array />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));


export default App;
