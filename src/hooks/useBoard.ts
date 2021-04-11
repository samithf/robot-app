import React, { useEffect, useState } from "react";

export interface IBox {
  x: number;
  y: number;
}

const useBoard = () => {
  const [activeBox, setActiveBox] = useState<IBox>({
    x: 2,
    y: 2,
  });

  const activeBoxRef = React.useRef(activeBox);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleKeyDown(e: KeyboardEvent) {
    setCoordinate(e.code);
  }

  function setCoordinate(code: string) {
    switch (code) {
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

  return {
    setCoordinate,
    activeBox,
  };
};

export default useBoard;
