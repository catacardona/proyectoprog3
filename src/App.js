import React from 'react';
import Movies from './Components/Movies/movies';


function App() {
  return (
   <>
    <p>React</p>
   
    <Movies />

    <footer>
        <ul className="team">
            <li>Nombre integrante 1</li>
            <li>Nombre integrante 2</li>
            <li>Nombre integrante 3</li>
        </ul>
    </footer>
    </>
  );
}

export default App;