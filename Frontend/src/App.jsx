import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import ScrollTop from "./Components/ScrollTop";

function App() {
  const [use, setUse] = useState("home");
  return (
    <>
      <ScrollTop />
      <Navbar use={use} setUse={setUse} />
      <div className="absolute top-0 w-full">
        <Outlet use={use} setUse={setUse} />
        <Footer use={use} setUse={setUse} />
      </div>
    </>
  );
}

export default App;
