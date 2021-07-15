import './Card.css';
import React, { useState } from 'react';

function Card(props) {
    const background = `url('${props.film.background}')`;
    return(
        <div className="Card" style={{backgroundImage: background}}>
            <div className="background">
                <h4>{props.film.title}</h4>
            </div>
              
        </div>
    )
}

export default Card;