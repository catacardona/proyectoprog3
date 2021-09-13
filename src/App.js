import React from 'react';
import Movies from './Components/Movies/movies';


function App() {
  return (
   <>
    <p>React</p>
   
    <Movies />

    <footer>
        <ul className="team">
            <li>Catalina Cardona</li>
            <li>Delfina Giesenow</li>
            <li>Serena Papazian</li>
        </ul>
    </footer>
    </>
  );
}

export default App;