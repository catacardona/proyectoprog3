import React from 'react';
/* necesario para escribir jsx, formato similar a html con un par de cambios*/
import Movies from './Components/Movies/movies';

/* componentes sin estado, los creo con function, devuelve html y los componentes*/
function App() {
  return (
   <>
   {/*es lo mismo que react.fragment*/}

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
/*devuelve de la linea 7 a la 19 que entra en el div root */

export default App;