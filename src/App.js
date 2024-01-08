import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <div id = "wrapper">
          <Header />
          <div id = "main-content">
            <Routes>

            </Routes>
          </div>
        </div>

      </BrowserRouter>
    </div>

  );
}

export default App;