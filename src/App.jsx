import React from "react";

import "./App.css";
import Navbar from "./componnets/Header/Navbar";
import Header from "./componnets/Header/Header";
import Wrapper from "./componnets/Wrapper";
import Buy from "./componnets/Buy/Buy";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Wrapper />
      <Buy/>
    </>
  );
}

export default App;
