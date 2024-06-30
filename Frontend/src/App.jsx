import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  const [use, setUse] = useState("home");
  return (
    <>
      <div>
        <Navbar use={use} setUse={setUse} />
        <Outlet />
      </div>
      <Footer use={use} setUse={setUse} />
    </>
  );
}

export default App;
