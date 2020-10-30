import React from "react";
import './card.styles.css';

const roboHashUrl = (id, set = 'set4') => {
    const validSets = [ 'set1', 'set2', 'set3', 'set4', 'set5', 'random' ];
    let imgSet = validSets.includes(set) ? set : 'set4';
    imgSet = imgSet === 'random' ? 'set' + (Math.floor(Math.random() * 10) % 5 + 1) : imgSet;
    return `https://robohash.org/${id}?set=${imgSet}&size=180x180`;
}

const Card = ({ id, name, email }) => {
    return (
        <div className="card-container">
            <img alt="avatar" src={roboHashUrl(id)} />
            <h1>{ name }</h1>
            <p>{ email }</p>
        </div>
    );
}

export default Card;