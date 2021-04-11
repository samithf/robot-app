import React from "react";
import useBoard from "../hooks/useBoard";
import "./Controls.css";

enum Direction {
  TOP = "ArrowUp",
  BOTTOM = "ArrowDown",
  LEFT = "ArrowLeft",
  RIGHT = "ArrowRight",
}

interface Props {
  setCoordinate: (direction: string) => void;
}

const Controls: React.FC<Props> = ({ setCoordinate }) => {
  function move(direction: Direction) {
    setCoordinate(direction);
  }

  return (
    <div className="controls p-3 text-blue-400">
      <div
        className="top bg-white p-2 pointer rounded cursor-pointer"
        onClick={() => move(Direction.TOP)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7l4-4m0 0l4 4m-4-4v18"
          />
        </svg>
      </div>
      <div
        className="left bg-white p-2 rounded cursor-pointer"
        onClick={() => move(Direction.LEFT)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
      </div>
      <div
        className="bottom bg-white p-2 rounded cursor-pointer"
        onClick={() => move(Direction.BOTTOM)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 17l-4 4m0 0l-4-4m4 4V3"
          />
        </svg>
      </div>
      <div
        className="right bg-white p-2 rounded cursor-pointer"
        onClick={() => move(Direction.RIGHT)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Controls;
