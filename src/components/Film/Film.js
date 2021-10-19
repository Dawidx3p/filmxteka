import './Film.css';
import React, { useEffect, useState } from 'react';
import {getOverview} from '../../util/imdb';

function Film(props) {
    console.log(props)
    const [film, setFilm] = useState(null);
    const [isPending, setIsPending] = useState(true);
    useEffect(() => {
        getOverview(props.currentFilm)
            .then(object => {
                setFilm(object);
                setIsPending(false);
            })
    }, [props.currentFilm]);
    return(
        <div>
        Chyba się coś nie odpala
        {isPending && <div>Loading...</div>}
        {film && <div>{film.title.title}</div>}
        </div>
    );
}

export default Film;