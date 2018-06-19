import React from "react";
import "./Cards.css"

const Cards = props => (
    <div className="card">
    <div className="img-container">
                                                        {/* listening for click so card id can be added to id array on App.js file */}
        <img className="img" alt={props.name} src={props.image} onClick={() =>props.changeClickedStatus(props.id)} id={props.id}/>
        </div>
        </div>
);

export default Cards;