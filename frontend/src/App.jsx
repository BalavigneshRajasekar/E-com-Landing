/* eslint-disable no-unused-vars */
import "./App.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import States from "./Context";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <>
      <States>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/product/:id" element={<SingleProduct />}></Route>
          </Routes>
        </BrowserRouter>
      </States>
    </>
  );
}

export default App;
