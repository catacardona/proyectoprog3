import React, {Component} from 'react';
import Card from '../Card/Card';
import Form from '../Form/Form';


class movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded:false,
          movies: [],
        moviesIniciales:[],
        nextUrl:2,
        };
      }
        
    componentDidMount(){
        let url='https://api.themoviedb.org/3/movie/popular?api_key=d89ecc8c152f1cbbc2fccbf5d2b03cbb&language=en-US&page=1';      
        fetch(url)
        .then(response =>response.json())
        .then(data => {
           console.log(data.results);
            this.setState ({
            movies: data.results,
            isLoaded: true,
            moviesIniciales: data.results,
        }
        )}
        )
        .catch(error => console.log(error));
        }
        addMore(){
           let url = 'https://api.themoviedb.org/3/movie/popular?api_key=d89ecc8c152f1cbbc2fccbf5d2b03cbb&language=en-US&page='+ this.state.nextUrl;
    
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.setState({
                        movies: this.state.movies.concat(data.results),
                        moviesIniciales: this.state.moviesIniciales.concat(data.results),
                      nextUrl: this.state.nextUrl+1,  //Para tener la página siguiente.
                    })
                })
                .catch( function (e){
                    console.log(e);
                })
        }
        deleteCard(movieABorrar){
            let moviesQueQuedan = this.state.movies.filter( movie => movie.id !== movieABorrar);
            this.setState({
                movies: moviesQueQuedan
            })
        }
        filtrar(buscado){
           let moviesFiltradas=this.state.moviesIniciales.filter(movie=>movie.title.toLowerCase().includes(buscado.toLowerCase()) )
            this.setState({
                movies: moviesFiltradas
            })
        }

        render(){
    console.log(this.state.movies);
    return(
        <React.Fragment>
                <header>
        <h1>Título/ Nombre de la app</h1>
        <section>
            <p>Ordenar ASC/ DESC</p>
            <i className="fas fa-th"></i>
            <i className="fas fa-align-justify"></i>
        <Form buscar={buscado=>this.filtrar(buscado)}/>
        </section>
    </header>
    <main>
    <button onClick={()=>this.addMore()}> Más peliculas </button>
        <section className="card-container">
        {
                    this.state.isLoaded ?
                    this.state.movies.map((movie, idx)=><Card key={movie.title + idx} dataMovies={movie} remove={(movieABorrar)=>this.deleteCard(movieABorrar)}/>) :
                    <p>Cargando...</p>
                }
        </section>
    </main>
        </React.Fragment>
         )}

            }
export default movies;