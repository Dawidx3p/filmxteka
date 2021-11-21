import './Home.css';
import React from 'react';
import MojaLista from '../../mojalista';
import PopUp from '../../components/popUp/popUp';

function Home(props) {
    return (
      <div>
        <h1>Filmxteka</h1>
        <MojaLista changeCurrentFilm={props.changeCurrentFilm} mojaLista={props.mojaLista} ready={props.ready}/>
        <PopUp user={props.user} addComment={props.addComment} currentFilm={props.currentFilm} comments={props.comments} />
      </div>
    )
  }

export default Home;