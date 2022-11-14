import React, { useState } from "react";
import response from "../../../data/data";
import { CardData } from "../../../interfaces/carddata";
import { CardTypes } from "../../../interfaces/cardtypes";
import Card from "../Card/Card";
const KanbanColumn = () => {

  const statuses = ["notstarted", "inprogress", "complete"]

  const [cardRow, setCardRow] = useState(response);
  const [card, setCard] = useState({});

  const setKeys = (cards: CardData[]): string[] =>
  {
    const keys = [...new Set(cards.map(item => item.status))];
    return keys;
  }

  const [cardStatuses, setCardStatuses] = useState(setKeys(cardRow))

  const onDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setCardRow((prevState) => {
      let newCard = prevState[index];
      newCard.status = 'complete';
      let newState = prevState;
      newState[index] = newCard;
      console.log(newState)
      return newState
    })
    setCardStatuses(setKeys(cardRow))
  };
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setCard(cardRow[index])
    console.log(cardRow[index])
  }
  
  return (
    <div className="container">
      <div className="row">
        {statuses.map((status, index) => (
          <div
            id={"col-" + status}
            onDrop={(event) => onDrop(event, index)}
            onDragOver={onDragOver}
            className="col-4 border"
          >
            <h4 >{status}</h4>
            {cardRow.map((card, index)=> {
              if (card.status === status) 
              { return (
            <Card 
              items={card} 
              handleDragStart={(event) => handleDragStart(event, index) }
              cardStatus={status} />
            )}})}

          </div>
        ))}
      </div>
    </div>
  );
};
export default KanbanColumn;
