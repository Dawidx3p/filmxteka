import {getMostPopular} from './util/imdb';
import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';


function MojaLista(props) {
    const [mojaLista, setMojaLista] = useState([]);
    const [ready, setReady] = useState(false);
    let i = 0;
    useEffect(() => {
        getMostPopular().then(object => {
            setMojaLista(Object.values(object));
            setReady(true);
        });
    },[])
    if(ready){
        return(
            <main>
              {mojaLista.map(film => {
                  i++;
                return <Card toggleClick={props.toggleClick} toggleLoading={props.toggleLoading} changeCurrentFilm={props.changeCurrentFilm} film={film} key={i} id={i}/>
              })}
            </main>
        )
    }else{
        return <main></main>   
    }
      
}
export default MojaLista;