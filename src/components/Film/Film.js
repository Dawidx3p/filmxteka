import './Film.css';
import React from 'react';

function Film(props) {
    return(
        <div>{props.film.title.title}</div>
    );
}

export default Film;