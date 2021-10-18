import './Card.css';
import React from 'react';
import Film from '../Film/Film';
import {getOverview} from '../../util/imdb';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";


function Card(props) {
    if(props.id <= 4){
        return(
            <div>
            <Link to={`/${props.film.title.id}`}>{props.film.title.title}</Link>
            <Switch>
                <Route path={`/${props.film.title.id}`}>
                <Film />
                </Route>
            </Switch>
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