import React from "react";
import Box from "./Box";
import "./Board.css";
import { IBox } from "../hooks/useBoard";

const boxes: IBox[] = [];

function initializeBoxes() {
  for (let yIndex = 4; yIndex >= 0; yIndex--) {
    for (let xIndex = 0; xIndex < 5; xIndex++) {
      boxes.push({ x: xIndex, y: yIndex });
    }
  }
  return boxes;
}

initializeBoxes();

interface Props {
  activeBox: IBox;
}

const Board: React.FC<Props> = ({ activeBox }) => {
  return (
    <div className="grid grid-cols-5 gap-2">
      {boxes.map((box, i) => (
        <Box key={i} box={box} activeBox={activeBox} />
      ))}
    </div>
  );
};

export default Board;
