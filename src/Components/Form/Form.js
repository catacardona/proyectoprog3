import React, {Component} from 'react';

class Form extends Component {
    /*lo importo al componente grande*/
    constructor(props) {
        super(props);
        this.state={
            valor:'',
            /* un solo estado vacio*/
        }
    }
    evitarDefault(evento){
        evento.preventDefault()
        /*queremos que se prevenga el default, que aparezca lo que estamos escribiendo, y si pongo enter que previene el default de que se refreshee la pagina*/
        /*con react se actualiza todo el tiempo, no deja escribir por que se manda cada vez que hay un cambio */
        /*con esta funcion evita que se envie cada vez que se escribe algo*/
    }
    controlarCambios(evento){
        this.setState({
            valor:evento.target.value
            /*cambia el value, que aparezca lo que yo escribo*/
            /*evento.target.value es el valor de lo que la persona escribio en el evento onChange*/
        }, ()=>this.props.buscar(this.state.valor))
        /*callback, que ni bien termino de escribir, se ejecuta esta funcion, pero primero tiene que pasar lo anterior*/
        /*si queremos hacer algo con el setState le pasamos el callback, una funcion despues de la coma, una vez que cambiaste el valor se hace esto*/
        /*se pasa todo lo que le pase en la funcion buscar*/
        /*le paso por props la funcion buscar*/
    }
    render (){
        return (
            /*renderiza un form*/
            <form action= "" onSubmit={(eventoSubmit) => this.evitarDefault(eventoSubmit)}>
                <input type="text" onChange={(eventoControlar)=> this.controlarCambios(eventoControlar)} value={this.state.valor} 
                /*que se ejecute cuando haya un cambio, no cuando se ponga enter*/
                /*usa el metodo controlarCambios */
                /* this.state.valor es el unico estado de este componente, el value cambia a lo que haya dentro del input*/
                placeholder="Buscar titulos" />
                <button type="submit">Enviar</button>
               </form>
        )
    }
}
export default Form;