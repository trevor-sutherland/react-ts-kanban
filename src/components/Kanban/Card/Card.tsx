import React, { useState } from "react";
import response from "../../../data/data";
import { CardData } from "../../../interfaces/carddata";
import './Card.scss';

interface myCardListProps {
  items: CardData[];
}
const Card = (props: myCardListProps):JSX.Element => {
  const [cardData, setCard] = useState(props);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("dragstart");
    event.dataTransfer.setData('text', event.currentTarget.id)
  }
  return (
    <div>
    {cardData.items.map((item) => (
    <div draggable='true' onDragStart={handleDragStart} className="card p-2 kanban-col">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{item.client}</li>
        <li className="list-group-item">{item.hours}</li>
        <li className="list-group-item">{item.priority}</li>
      </ul>
    </div>
    )
  )}
  </div>
  );
};

export default Card;
