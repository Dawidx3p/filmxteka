import React from 'react';
import Card from './components/Card/Card';


function MojaLista(props) {
    let i = 0;
    if(props.ready){
        return(
            <main>
              {props.mojaLista.map(film => {
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