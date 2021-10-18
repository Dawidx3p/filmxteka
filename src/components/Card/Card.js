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
    let match = useRouteMatch();
    const background = `url('${props.film.title.image.url}')`;
    if(props.id <= 4){
        return(
            <div>
            <Link to={`${match.url}/${props.film.title.id}`}>
                <div className="Card" style={{backgroundImage: background}}>
                <div className="background" >
                        
                </div>
                </div>
            </Link>
            <Switch>
                <Route path={`${match.path}/:filmId`}>
                <Film />
                </Route>
                <Route path={match.path}>
                <h3>Please select a topic.</h3>
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