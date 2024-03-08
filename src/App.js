import { useState } from 'react';
import './App.css';
import RickAndMorty from './rickMorty';

function App() {
  const [number, setNumber] = useState(2);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty API</h1>
        <form>
          <input type="number" placeholder="Número de personajes" onChange={(event) => setNumber(Number(event.target.value))}/>
        </form>
        <RickAndMorty numberOfCharacters={number} />
        <p>NOTA IMPORTANTE: ingresar un numero mayor a 1 y que no comience por 1</p>
      </header>
    </div>
  );
}

export default App;