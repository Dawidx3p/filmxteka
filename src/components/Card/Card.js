import './Card.css';
import React from 'react';

import {getOverview} from '../../util/imdb';
import {
    Link
  } from "react-router-dom";


function Card(props) {
    if(props.id <= 4){
        return(
            <div>
            <Link to={`/film/${props.film.title.id}`}>{props.film.title.title}</Link>
            </div>
        )
    }else{
        return(
            <div className="Card">
                <div className="small" onClick={() => {
                    getOverview(props.film.title.id)
                    .then(object => {
                        props.changeCurrentFilm(object);
                        props.toggleClick();
                    })
                    }}>
                        <h3>{props.film.title.title}</h3>
                </div>
            </div>
        )
    }
        
    }
    

export default Card;