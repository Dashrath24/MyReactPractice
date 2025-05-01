import React from "react";
import { Route, Routes } from "react-router";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import Task4 from "./components/Task4";
import Task5 from "./components/Task5";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
        <Route path="/task5" element={<Task5 />} />
      </Routes>
    </>
  );
}

export default App;
