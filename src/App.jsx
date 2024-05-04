import React from "react";

import "./App.css";
import Navbar from "./componnets/Header/Navbar";
import Header from "./componnets/Header/Header";
import Wrapper from "./componnets/Wrapper";
import Buy from "./componnets/Buy/Buy";
import Roadmap from "./componnets/Roadmap/Roadmap";
import Footer from "./componnets/Footer";
import Banner from "./componnets/Banner";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Wrapper />
      <Buy/>
      <Roadmap/>
      <Footer/>
      <Banner/>
    </>
  );
}

export default App;
