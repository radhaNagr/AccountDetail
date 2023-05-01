import React from "react";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BankData from "./components/BankData";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/bankData"  element={<BankData/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
