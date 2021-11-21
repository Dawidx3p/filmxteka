import './Card.css';
import React from 'react';
import {
    Link
  } from "react-router-dom";


function Card(props) {
    if(props.id <= 4){
        return(
            <div  className="card">
            <Link to={`/film/${props.film.title.id}`} onClick={() => {
                        props.changeCurrentFilm(props.film.title.id);
                    }}><div className='film bigFilm'><img alt='film poster' src={props.film.title.image.url}/></div></Link>
            </div>
        )
    }else{
        return(
            <div className="card">
                <div className="small">
                <Link to={`/film/${props.film.title.id}`} onClick={() => {
                        props.changeCurrentFilm(props.film.title.id);
                    }}><div className='film'>{props.film.title.title}</div></Link>
                </div>
            </div>
        )
    }
        
    }
    

export default Card;