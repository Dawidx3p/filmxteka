import './App.css';
import React, { useState } from 'react';
import MojaLista from './mojalista';
import PopUp from './components/popUp/popUp';
import Profile from './components/Profile/Profile';
import { useAuth0 } from "@auth0/auth0-react";
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  const [comments, setComments] = useState({});
  const [currentFilm, setCurrentFilm] = useState({});
  const [clicked, setClicked] = useState(false);
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  function toggleClick(){ setClicked(!clicked)};

  function changeCurrentFilm(film){ setCurrentFilm(film)};

  function addComment(id, user, comment){
    console.log(comment);
    if(comments[id]===undefined){
      setComments(prevState => ({
        ...prevState, 
        [id]: [{id, user, comment}] }));
    }else{
      setComments(prevState => ({
        ...prevState, 
        [id]: [...prevState[id], {id, user, comment}] }));
    }
    
  };

  if(isAuthenticated){
    return(
      <Router>
      <div className="App">
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

        <Switch>
          <Route path="/mylist">
            <MyList />
          </Route>
          <Route path="/myComments">
            <MyComments />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    
        <h1>Filmxteka</h1>
        <MojaLista toggleClick={toggleClick} changeCurrentFilm={changeCurrentFilm}/>
        <PopUp user={user} addComment={addComment} clicked={clicked} currentFilm={currentFilm} toggleClick={toggleClick} comments={comments}/>
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
      <h2>Topics</h2>

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
