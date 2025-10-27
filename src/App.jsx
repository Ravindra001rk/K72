import React, { useRef } from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Agence from "./Pages/Agence";
import Projects from "./Pages/Projects";
import Stair from "./Components/Aimation/Stair";
import Navbar from "./Components/Navigation/Navbar";
import Fullnav from "./Components/Navigation/Fullnav";
const App = () => {
  return (
    <div className="h-screen fixed w-full ">
      <Navbar/>
      <Fullnav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
