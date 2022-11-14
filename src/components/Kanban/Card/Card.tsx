import React, { useState } from "react";
import response from "../../../data/data";
import { CardData } from "../../../interfaces/carddata";
import "./Card.scss";
import { CardTypes } from "../../../interfaces/cardtypes";

interface myCardListProps {
  items: CardData;
  cardStatus: string;
  handleDragStart(event: React.DragEvent<HTMLDivElement>): void;
}
const Card = (props: myCardListProps): JSX.Element => {
  const [cardData, setCard] = useState(props);
  return (
    <div>
        <div
          id="yesIDYES"
          draggable="true"
          onDragStart={cardData.handleDragStart}
          className="card p-2 kanban-col"
        >
          <div className="card-body">
            <h5 className="card-title">{cardData.cardStatus}</h5>
            <p className="card-text">{cardData.items.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{cardData.items.client}</li>
            <li className="list-group-item">{cardData.items.hours}</li>
            <li className="list-group-item">{cardData.items.priority}</li>
          </ul>
        </div>
    </div>
  );
};

export default Card;
