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
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  const [mojaLista, setMojaLista] = useState([]);
  const [ready, setReady] = useState(false);
  const [comments, setComments] = useState([]);
  const [currentFilm, setCurrentFilm] = useState({});
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
            <MyList />
          </Route>
          <Route path="/myComments">
            <MyComments />
          </Route>
          <Route path="/film">
            <Film currentFilm={currentFilm} user={user} comments={comments} addComment={addComment}/>
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

function MyList() {
  return <h2>My List</h2>;
}

function MyComments() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topicss</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default App;
