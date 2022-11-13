import React, { useState } from "react";
import response from "../../../data/data";
import { CardTypes } from "../../../interfaces/cardtypes";
import Card from "../Card/Card";
const KanbanColumn = () => {
  const [cardRow, setCardRow] = useState(response);
  const keys = Object.keys(cardRow);
  const colNum = 12 / keys.length;

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData("text");
    console.log(e.dataTransfer);
  };
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(e + "\nDrgged over");
  };
  return (
    <div className="container">
      <div className="row">
        {keys.map((key) => (
          <div
            id={"col-" + key}
            onDropCapture={onDrop}
            onDragOver={onDragOver}
            className={"col-" + colNum + " border"}
          >
            Hello
            <Card items={cardRow[key as keyof CardTypes]} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default KanbanColumn;
