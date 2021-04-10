import React from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <>
      <div className="bg-blue-400 text-blue-400 min-h-screen flex items-center justify-center">
        <Board />
      </div>
    </>
  );
}

export default App;
