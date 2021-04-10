import React, { useEffect, useState } from "react";
import Box from "./Box";
import "./Board.css";

export interface IBox {
  x: number;
  y: number;
}

const Board = () => {
  const [boxes] = useState(initializeBoxes);
  const [activeBox, setActiveBox] = useState<IBox>({
    x: 2,
    y: 2,
  });

  const activeBoxRef = React.useRef(activeBox);

  useEffect(() => {
    document.addEventListener("keydown", setCoordinate);
    return () => {
      document.removeEventListener("keydown", setCoordinate);
    };
  }, []);

  function initializeBoxes() {
    const boxes: IBox[] = [];

    for (let yIndex = 4; yIndex >= 0; yIndex--) {
      for (let xIndex = 0; xIndex < 5; xIndex++) {
        boxes.push({ x: xIndex, y: yIndex });
      }
    }

    console.log(boxes);
    return boxes;
  }

  function setCoordinate(e: KeyboardEvent) {
    switch (e.code) {
      case "ArrowUp":
        if (activeBoxRef.current.y === 4) {
          return;
        }
        setActiveBox((prevActiveBox) => {
          const newState: IBox = {
            x: prevActiveBox.x,
            y: prevActiveBox.y + 1,
          };
          activeBoxRef.current = newState;
          return newState;
        });
        return;
      case "ArrowDown":
        if (activeBoxRef.current.y === 0) {
          return;
        }
        setActiveBox((prevActiveBox) => {
          const newState: IBox = {
            x: prevActiveBox.x,
            y: prevActiveBox.y - 1,
          };
          activeBoxRef.current = newState;
          return newState;
        });
        return;
      case "ArrowRight":
        if (activeBoxRef.current.x === 4) {
          return;
        }
        setActiveBox((prevActiveBox) => {
          const newState: IBox = {
            x: prevActiveBox.x + 1,
            y: prevActiveBox.y,
          };
          activeBoxRef.current = newState;
          return newState;
        });
        return;
      case "ArrowLeft":
        if (activeBoxRef.current.x === 0) {
          return;
        }
        setActiveBox((prevActiveBox) => {
          const newState: IBox = {
            x: prevActiveBox.x - 1,
            y: prevActiveBox.y,
          };
          activeBoxRef.current = newState;
          return newState;
        });
        return;
      default:
        return;
    }
  }

  return (
    <div className="grid grid-cols-5 gap-2">
      {boxes.map((box, i) => (
        <Box key={i} box={box} activeBox={activeBox} />
      ))}
    </div>
  );
};

export default Board;
