import React from "react";
import "./App.css";
import Board from "./components/Board";
import Controls from "./components/Controls";

function App() {
  return (
    <>
      <div>
        <div className="bg-blue-400 text-blue-400 min-h-screen flex items-center justify-center">
          <Board />
        </div>
        <Controls />
      </div>
    </>
  );
}

export default App;
