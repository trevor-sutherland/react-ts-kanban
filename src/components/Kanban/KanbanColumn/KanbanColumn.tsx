import React, {useState} from 'react';
import response from '../../../data/data';
import { CardTypes } from '../../../interfaces/cardtypes';
import Card from '../Card/Card';
const  KanbanColumn = () => {

    const [cardRow, setCardRow] = useState(response);
    const keys = Object.keys(cardRow);
    const colNum = 12/keys.length;

    return(
        <div className="container">
            <div className="row">
                {keys.map((key) => (
                <div className={"col-" + colNum + " border"}>
                    <Card items={cardRow[key as keyof CardTypes]}/>
                </div>
                ))} 
            </div>
        </div>
    )
}
export default KanbanColumn;