import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import MemesDisplay from "./components/MemesDisplay/MemesDisplay";

function App() {
  return (
    <div className="page">
      <Header />
      <div className="main">
        <Router>
          <NavBar></NavBar>
          <MemesDisplay></MemesDisplay>
        </Router>
      </div>
    </div>
  );
}

export default App;
