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
    if(this.state.viewMore){
        this.setState({
            viewMore: false,
            text: 'Ver más'
        })
    } else {
        this.setState({
            viewMore: true,
            text: 'ver menos'
        })            
    }
}
selected(){
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
      //const response= fetch ('https://developers.themoviedb.org/3/movies/get-popular-movies');
      //console.log("response: ", response);
    return (
// <div className={`character-card ${this.state.selected ? 'active' : 'hola'}`} onDoubleClick={ ()=>this.selected()}>    
                <article className="character-card">
                <section className="navigation">
                    <i className="far fa-window-close" onClick={()=>this.props.remove(this.props.dataMovies.id)}>Borrar</i>
                    <img src={`https://image.tmdb.org/t/p/w500${this.props.dataMovies.poster_path}`} alt=""/>
                </section>
                <main>
                    <h3>{this.props.dataMovies.title}</h3>
                    <p className="description">{this.props.dataMovies.overview}</p>
                    <section className="aditional-info">
                    <p className={`popularity ${this.state.viewMore ? 'show' : 'hide'}`}> Popularity: {this.props.dataMovies.popularity}</p>             
                    <p className={`original_language ${this.state.viewMore ? 'show' : 'hide'}`}> Original language: {this.props.dataMovies.original_language}</p>             
                <p className={`vote_average ${this.state.viewMore ? 'show' : 'hide'}`}> Vote average: {this.props.dataMovies.vote_average}</p>                      
                    </section>
                    <p className='more' onClick={()=>this.viewMore()}>{this.state.text}</p>
                </main>
            </article>
          //  </div>
    );
  }
}

export default Card;
