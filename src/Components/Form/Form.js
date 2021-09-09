import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            valor:'',
        }
    }
    evitarDefault(evento){
        evento.preventDefault()
        
    }
    controlarCambios(evento){
        this.setState({
            valor:evento.target.value
        }, ()=>this.props.buscar(this.state.valor))
    }
    render (){
        return (
            <form action= "" onSubmit={(eventoSubmit) => this.evitarDefault(eventoSubmit)}>
                <input type="text" onChange={(eventoControlar)=> this.controlarCambios(eventoControlar)} value={this.state.valor} 
                placeholder="Ingresa tu nombre" />
                <button type="submit">Enviar</button>
               </form>
        )
    }
}
export default Form;