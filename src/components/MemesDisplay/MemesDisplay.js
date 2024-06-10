import React from "react";
import { Routes, Route } from "react-router-dom";
import Memes from "../Memes/Memes";
import HotMemes from "../HotMemes/HotMemes";
import RegularMemes from "../RegularMemes/RegularMemes";
import "./MemesDisplay.css";

const MemesDisplay = () => {
  return (
    <main className="memesDisplay">
      <Routes>
        <Route path="/hot" element={<HotMemes />} />
        <Route path="/regular" element={<RegularMemes />} />
        <Route path="/" element={<Memes />} />
      </Routes>
    </main>
  );
};

export default MemesDisplay;
