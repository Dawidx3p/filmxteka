import './App.css';
import React, { useState } from 'react';
import Card from './components/Card/Card';

function App() {
  const initialUsers = [{username: 'Legos', password: 'Qwerty1'}, {username: 'Fagos', password: 'Qwerty2'}];
  const mojaLista = [{id: 1, title: 'Lucyfer', creator: 'Tom Kapinos', cast: ['Man One', 'Famous Arni', 'Alice Wonderland'], description: 'Nieszczęśliwy i znudzony swoim bytem Lucyfer Morningstar porzuca funkcję Władcy Piekieł, po czym udaje się do Los Angeles, gdzie zostaje właścicielem luksusowego klubu nocnego.', genres: ['Fantasy', 'Thriller'], background: 'https://fwcdn.pl/fpo/25/20/742520/7928120.6.jpg'},
  {id: 2, title: 'Lucyfer', creator: 'Tom Kapinos', cast: ['Man One', 'Famous Arni', 'Alice Wonderland'], description: 'Nieszczęśliwy i znudzony swoim bytem Lucyfer Morningstar porzuca funkcję Władcy Piekieł, po czym udaje się do Los Angeles, gdzie zostaje właścicielem luksusowego klubu nocnego.', genres: ['Fantasy', 'Thriller'], background: 'https://fwcdn.pl/fpo/25/20/742520/7928120.6.jpg'}]
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
        <main>
          {mojaLista.map(film => {
            return <Card film={film} key={film.id}/>
          })}
        </main>
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
