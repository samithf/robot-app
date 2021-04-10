import React, { FC } from "react";
import { IBox } from "./Board";
import "./Box.css";

interface Props {
  box: IBox;
  activeBox: IBox;
}

const Box: FC<Props> = ({ box, activeBox }) => {
  return (
    <div
      className={`bg-white p-7 rounded ${
        box.x === activeBox.x && box.y === activeBox.y ? "active" : ""
      }`}
    ></div>
  );
};

export default Box;
