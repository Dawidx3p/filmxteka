import './App.css';
import React, { useState } from 'react';
import MojaLista from './mojalista';

function App() {
  const initialUsers = [{username: 'Legos', password: 'Qwerty1'}, {username: 'Fagos', password: 'Qwerty2'}];
  const [users, setUsers] = useState(initialUsers);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function validate(){
    for(const user in users){
      if(users[user].username === username && users[user].password === password){
        setLogged(true);
      }else{
        setUsername('');
        setPassword('');
      }
    }
  }
  if(logged){
    return(
      <div className="App">
        <h1>Filmxteka</h1>
        <nav>
          <ul>
            <li>Strona główna</li>
            <li>Seriale i programy</li>
            <li>Filmy</li>
            <li>Moja lista</li>
          </ul>
        </nav>
        <MojaLista />
        <button onClick={() => setLogged(false)}>wyloguj</button>
      </div>
    )
  }else {
    return (
      <div className="LogIn"> 
      <h1>Filmxteka</h1>
        <div className="container">
          <form id="form_id" method="post" name="login">
              <label>User Name</label>
              <input type="text" name="username" id="username" value={username} onChange={(event) => setUsername(event.target.value)}/>
              <label>Password</label>
              <input type="password" name="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
              <input type="button" value="Login" id="submit" onClick={validate}/>
          </form>
          <button onClick={() => setLogged(true)}>zaloguj</button>
        </div>
            
      </div>
    )
  } 
}

export default App;
