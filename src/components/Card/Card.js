import './Card.css';
import React, { useState } from 'react';

function Card(props) {
    const background = `url('${props.film.title.image.url}')`;
    const [clicked, setClicked] = useState(false);
    let genres = '';
    for(let genre in props.film.genres){
        if(genre==0){
            genres = genres + props.film.genres[genre];
        }else{
            genres = genres + ', ' + props.film.genres[genre];
        }
    }
    return(
        <div className="Card" style={{backgroundImage: background}}>
            <div className="background" onClick={() => setClicked(true)}>
            </div>
            <div className="vid" style={clicked ? {display: 'grid'} : {display: 'none'}}>
                <div className="popup">
                    <img src={props.film.title.image.url}/>
                    <h1>{props.film.title.title}</h1>
                    <h4>Rok: {props.film.title.year}</h4>
                    <p>{genres}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;