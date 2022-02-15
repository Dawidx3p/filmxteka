import './App.css';
import {getMostPopular} from './util/imdb';
import React, { useState, useEffect } from 'react';
import Profile from './components/Profile/Profile';
import { useAuth0 } from "@auth0/auth0-react";
import Home from './components/Home/Home';
import Film from './components/Film/Film';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import MyFilm from './components/MyFilm';

function App() {
  const [mojaLista, setMojaLista] = useState([]);
  const [ready, setReady] = useState(false);
  const [comments, setComments] = useState([]);
  const [currentFilm, setCurrentFilm] = useState({});
  const [myList, setMyList] = useState([]);
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  function changeCurrentFilm(film){ setCurrentFilm(film)};

  function addComment(comment){
      setComments([
        ...comments, 
        comment ]);
    };
    
  useEffect(() => {
    getMostPopular().then(object => {
        setMojaLista(Object.values(object));
        setReady(true);
    });
  },[])
  /*
  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments))
},[comments])
  useEffect(() => {
    const commentsLocal = JSON.parse(localStorage.getItem('comments'));
    console.log(commentsLocal);
    if(commentsLocal && commentsLocal.length>0  && comments.length===0)setComments(commentsLocal);
  },[comments.length]) */

  if(isAuthenticated){
    return(
      <Router>
      <div className="App">
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mylist">My List</Link>
          </li>
          <li>
            <Link to="/myComments">My Comments</Link>
          </li>
        </ul>
        </nav>

        <Switch>
          <Route path="/mylist">
            <MyList myList={myList} 
            deleteFilmFromMyList={film => {setMyList([myList.filter(obj => obj!==film)])}}/>
          </Route>
          <Route path="/myComments">
            <MyComments comments={comments}/>
          </Route>
          <Route path="/film">
            <Film addFilmToMyList={film => setMyList([...myList, film])} currentFilm={currentFilm} user={user} comments={comments} addComment={addComment}/>
          </Route>
          <Route path="/">
            <Home changeCurrentFilm={changeCurrentFilm}  user={user} mojaLista={mojaLista} ready={ready}/>
          </Route>
        </Switch>
      </div>
        <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
      </Router>
    )
  } else {
    
    return (
      <div className="LogIn">
      <Profile /> 
      <h1>Filmxteka</h1>
          <button className='submit' onClick={() => loginWithRedirect()}>Zaloguj</button>;
      </div>
    )
  } 
}

function MyList(props) {
  return (<ul className='myListFilms'>
    {props.myList.length ? props.myList.map((film, key) => <MyFilm key={key} film={film}/>) : 'No films added yet'}
  </ul>)
}

function MyComments({comments}) {
  console.log(comments)
  return (
    <ul>
      {comments.length ? comments.map((comment, key) => <li key={key}>{comment.comment}</li>) : 'No comments added yet'}
    </ul>
  );
}

export default App;
