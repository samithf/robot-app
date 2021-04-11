import React from "react";
import "./App.css";
import Board from "./components/Board";
import Controls from "./components/Controls";
import useBoard from "./hooks/useBoard";

function App() {
  const { setCoordinate, activeBox } = useBoard();
  return (
    <>
      <div>
        <div className="bg-blue-400 text-blue-400 min-h-screen flex items-center justify-center">
          <Board activeBox={activeBox} />
        </div>
        <Controls setCoordinate={setCoordinate} />
      </div>
    </>
  );
}

export default App;
