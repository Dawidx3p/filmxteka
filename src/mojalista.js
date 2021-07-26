import {getMostPopular} from './util/imdb';
import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';


/*const mojaLista = [
   {id: 1, title: 'Lucyfer', creator: 'Tom Kapinos', cast: ['Man One', 'Famous Arni', 'Alice Wonderland'], description: 'Nieszczęśliwy i znudzony swoim bytem Lucyfer Morningstar porzuca funkcję Władcy Piekieł, po czym udaje się do Los Angeles, gdzie zostaje właścicielem luksusowego klubu nocnego.', genres: ['Fantasy', 'Thriller'], background: 'https://fwcdn.pl/fpo/25/20/742520/7928120.6.jpg'},
 {id: 2, title: 'Lucyfer', creator: 'Tom Kapinos', cast: ['Man One', 'Famous Arni', 'Alice Wonderland'], description: 'Nieszczęśliwy i znudzony swoim bytem Lucyfer Morningstar porzuca funkcję Władcy Piekieł, po czym udaje się do Los Angeles, gdzie zostaje właścicielem luksusowego klubu nocnego.', genres: ['Fantasy', 'Thriller'], background: 'https://fwcdn.pl/fpo/25/20/742520/7928120.6.jpg'}
];*/

function MojaLista() {
    const [mojaLista, setMojaLista] = useState([]);
    const [ready, setReady] = useState(false);
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
                return <Card film={film} key={film.id}/>
              })}
            </main>
        )
    }else{
        return <main></main>   
    }
      
}
export default MojaLista;