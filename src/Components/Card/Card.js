import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMore: false,
      text:'Ver más',
      selected: false,
    };
  }
  viewMore(){
      /*para que la descripcion se agrande o acorte */
    if(this.state.viewMore){
        this.setState({
            viewMore: false,
            text: 'Ver más'
            /* al principio este es el texto, se ejecuta la funcion de viewMore, pregunta si existe this.state.viewMore, si ya fue clickeado es que ya aparece la descripcion*/
        })
    } else {
        /* cuando viewMore se aprieta y es falso se ejecuta el else*/
        this.setState({
            viewMore: true,
            text: 'Ver menos'
            /* si ya se clickea el boton aparece ver menos*/
        })            
    }
}
selected(){
    /* esta comentado en el render, no lo estamos usando*/
    if(this.state.selected){
        this.setState({
            selected: false,
        })
    } else {
        this.setState({
            selected: true,
        })
    }
}
  render() {
      /*renderiza la card, con las propiedades que le pasamos el componente padre movies */
      //const response= fetch ('https://developers.themoviedb.org/3/movies/get-popular-movies');
      //console.log("response: ", response);
    return (
// <div className={`character-card ${this.state.selected ? 'active' : 'hola'}`} onDoubleClick={ ()=>this.selected()}>    
                <article className="character-card">
                <section className="navigation">
                    <i className="far fa-window-close" onClick={()=>this.props.remove(this.props.dataMovies.id)}>Borrar</i>
                    {/*le paso el id que le paso a la funcion del componente padre */}
                    {/*cuando clickeo esta tarjeta se ejecuta la funcion que creamos en movies.js, le entra el id de la pelicula y a partir de ahi la borra*/}
                    <img src={`https://image.tmdb.org/t/p/w500${this.props.dataMovies.poster_path}`} alt=""/>
                </section>
                <main>
                    <h3>{this.props.dataMovies.title}</h3>
                    {/*cuando el componentDidMount ejecuta la api, lo guardo en movies, y ahora le paso con un map por cada pelicula en una card la informacion de esa pelicula como prop */}
                    <p className="description">{this.props.dataMovies.overview}</p>
                    <section className="aditional-info">
                    <p className={`popularity ${this.state.viewMore ? 'show' : 'hide'}`}> Popularity: {this.props.dataMovies.popularity}</p>   
                    {/* si existe que la clase sea show, sino hide, esto cambia en el css */}
                    <p className={`original_language ${this.state.viewMore ? 'show' : 'hide'}`}> Original language: {this.props.dataMovies.original_language}</p>             
                <p className={`vote_average ${this.state.viewMore ? 'show' : 'hide'}`}> Vote average: {this.props.dataMovies.vote_average}</p>                      
                    </section>
                    <p className='more' onClick={()=>this.viewMore()}>{this.state.text}</p>
                    {/*funcion que cuando la clickeas se ejecuta la funcion viewMore, el texto depende de en que estado esta */}
                </main>
            </article>
          //  </div>
    );
  }
}

export default Card;
