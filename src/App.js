import React from 'react';
/* necesario para escribir jsx, formato similar a html con un par de cambios*/
import Movies from './Components/Movies/movies';

/* componentes sin estado, los creo con function, devuelve html y los componentes*/
function App() {
  return (
   <>
   {/*es lo mismo que react.fragment*/}

   
    <Movies />

    <footer>
        <ul className="team">
            <p>Catalina Cardona</p>
            <p>Delfina Giesenow</p>
            <p>Serena Papazian</p>
        </ul>
    </footer>
    </>
  );
}
/*devuelve de la linea 7 a la 19 que entra en el div root */

export default App;