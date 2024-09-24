/* eslint-disable no-unused-vars */
import "./App.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import States from "./Context";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <States>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </States>
    </>
  );
}

export default App;
