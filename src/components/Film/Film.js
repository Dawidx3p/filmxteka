import './Film.css';
import React, { useEffect, useState } from 'react';
import Comments from '../Comments/Comments';
import AddComment from '../addComment/addComment';
import {getOverview} from '../../util/imdb';
import {Link} from "react-router-dom";

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
        {isPending && <div className="CurrentFilm">Loading...</div>}
        {film && <div className="CurrentFilm">
            <section>
            <h2>{film.title.title}</h2>
            <p>{film.plotOutline.text}</p>
            <Comments currentFilm={props.currentFilm} comments={props.comments} />
            <AddComment user={props.user} currentFilm={props.currentFilm} addComment={props.addComment}/>
            <Link to="/"><div className='primaryButton'>Go back</div></Link>
            </section>
            <img alt='Film poster' src={film.title.image.url} /></div>}
        </div>
    );
}

export default Film;