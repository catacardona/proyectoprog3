import React, {Component} from 'react';
/*importamos Component, tiene cosas adentro que permiten definir el componente y crear un constructor y super para agarrar mas propiedades del padre*/
import Card from '../Card/Card';
import Form from '../Form/Form';
/* DOM como tenes el documento actual el codigo literal, virtual DOM es lo que esta en el navegador, la interpretacion del codigo en el navegador*/
/* componente con estado, class es una palabra reservada de react, permite armar una funcion pero aportandole cosas de un componente con estado*/

class Movies extends Component {
    constructor(props) {
        super(props);
        /*permiten poder tener estados, constructor son las propiedades y super agarra las propiedades (props) del componente padre*/
        this.state = {
        /* estados en el componente, permiten efectuar un cambio en esa propiedad dentro del componente*/
        /* ante un cambio no se reinicia todo el documento, por los componentes con estado se puede cambiar esa unica propiedad que se esta llamando*/
        isLoaded:false,
        movies: [],
        /* guardamos un estado vacio, le pedimos a la api despues que nos de esto y se guarda aca*/
        moviesIniciales:[],
        nextUrl:2,
        /* arranca en 2 por que la 1 es la que aparece al principio*/
        isRow: true,
        };
      }
        
    componentDidMount(){
    /*funciona ni bien aparece el componente, apenas se renderiza en la pagina aparece esta funcion, en este caso agarramos la API */
    /*seteamos los estados con la informacion de la api*/
        let url='https://api.themoviedb.org/3/movie/popular?api_key=d89ecc8c152f1cbbc2fccbf5d2b03cbb&language=en-US&page=1';      
        fetch(url)
        /* dame la info que aparece en el link*/
        .then(response =>response.json())
        /*.json traduce la informacion a un lenguaje que me permite agarrar la informacion*/
        .then(data => {
        /*si o si tiene que pasar lo anterior para ejecutar esto, lo paso a data */
           console.log(data.results);
           /*para saber que trae la api, el results es el array de lo que pedimos*/
            this.setState ({
            /*sirve para modificar los estados una vez creados*/
             /*los estados sirven para guardar info y ver como se modifica, y a partir de esto generar otro*/
            movies: data.results,
            isLoaded: true,
            /*por que ya esta cargado, aparecen las tarjetas*/
            moviesIniciales: data.results,
            /* guardo la informacion que yo quiero en el estado para poder usarlo para que aparezca una tarjeta por pelicula*/
        }
        )}
        )
        .catch(error => console.log(error));
        }
        addMore(){
           let url = 'https://api.themoviedb.org/3/movie/popular?api_key=d89ecc8c152f1cbbc2fccbf5d2b03cbb&language=en-US&page='+ this.state.nextUrl;
            /*nuevo pedido a la api para buscar nuevas peliculas, modificamos el estado nextUrl */
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.setState({
                        /*setea los estados */
                        movies: this.state.movies.concat(data.results),
                        /*se concatena, tengo dos arrays y le meto uno al otro para que quede un array mas grande, concateno la data de la nueva api*/
                        moviesIniciales: this.state.moviesIniciales.concat(data.results),
                      nextUrl: this.state.nextUrl+1,  //Para tener la página siguiente.
                      /* modifico este estado para que no aparezca siempre la pagina 2, que se vaya modificando +1*/
                    })
                })
                .catch( function (e){
                    console.log(e);
                })
        }
        deleteCard(movieABorrar){
            /*hago un filter, guardo un array de las peliculas filtradas */
            /* filter permite manejarme y seguir filtrando o recorriendo un array*/
            let moviesQueQuedan = this.state.movies.filter( movie => movie.id !== movieABorrar);
         /*movie es el nombre de cada elemento, despues va la condicion, que las movies que quedan sean distintas a las que borre*/
         /*filter se queda con elemento que cumpla condicion: cada pelicula que cumpla esa condicion es la que queda*/
            this.setState({
                movies: moviesQueQuedan,
                moviesIniciales: moviesQueQuedan
     /*modifico el estado, movies pasa a ser las que quedaron despues de borrar y moviesIniciales tambien para que no vuelva a aparecer*/
            })
        }
        filtrar(buscado){
           let moviesFiltradas=this.state.moviesIniciales.filter(movie=>movie.title.toLowerCase().includes(buscado.toLowerCase()) )
           /* filtro la lista de peliculas y la condicion es que si el titulo incluye lo que busque, se guarda y se muestra*/
            /* moviesIniciales para no buscar sobre la misma lista*/
            this.setState({
                movies: moviesFiltradas
           /*modifico el estado, movies pasa a ser las que quedaron despues de filtrar*/
            })
        }

        columna(){
            this.setState({
                isRow: false,
            })
        }

        fila(){
            this.setState({
                isRow: true,
            })
        }
    
        render(){
        /* es lo que yo quiero que haga, lo que quiero que se muestre*/
    console.log(this.state.movies);
    return(
        <React.Fragment>
        {/*sirve para encapsular el codigo jsx dentro de un solo elemento o etiqueta*/}
                <header>
        <h1>Cinematic</h1>
        <section>
        {/*dos eventos onClick para que se ejecuten las funciones*/}
        <i onClick={()=>this.fila()} className="fas fa-th"></i>
        <i onClick={()=>this.columna()} className="fas fa-align-justify" ></i>
        <Form buscar={buscado=>this.filtrar(buscado)}/>
        {/*es la parte de busqueda */}
        {/*permite escribir java*/}
        </section>
    </header>
    <main>
        <section className={`${this.state.isRow ? 'card-container' : 'columna'}`}>  
        {/* meto toda la info de las pelis en esta section, si this.state.isRow es true o existe, que la clase sea card-container, sino columna*/}
             {
                    /*if ternario, si isLoaded existe, si es true o existe entra en el condicional, si es null no entra ahi*/
                    this.state.isLoaded ?
                    /*map es una funcion de es6, es igual a un for (iterador), hace algo reiteradas veces, map permite modificar arrays*/
                    /*this.state.movies es mi array, idx es para identificar los elementos*/
                    /*movie es cada elemento dentro de movies, es lo que se itera*/
                    /*key, dataMovies, remove son props que le mando a la card para que se vaya modificando*/
                    /*map recorre la lista de peliculas*/
                    this.state.movies.map((movie, idx)=><Card key={movie.title + idx} dataMovies={movie} remove={(movieABorrar)=>this.deleteCard(movieABorrar)}/>) :
                    <p>Cargando...</p>
                }
        </section>
        <button className="botonpelis" onClick={()=>this.addMore()}> Más peliculas </button>
        {/*  */}
    </main>
        </React.Fragment>
         )}

            }
export default Movies;
/*exporto la clase movies para poder incluirlo*/