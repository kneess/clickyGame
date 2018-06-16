import React from "react";
import "./Cards.css"

const Cards = props => (
    <div className="card">
    <div className="img-container">
        <img className="img" alt={props.name} src={props.image} onClick={props.handleIncrement} />
        </div>
        </div>
);

export default Cards;