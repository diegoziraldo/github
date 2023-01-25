import React, {Component} from "react";

export default class Padre extends Component{

    state = {
        contador: 0,
    }

    incrementarContador = ()=>{
        this.setState({
            contador: this.state.contador + 1
        })
    }


    render(){
        return(
            <>
                <h2>Comunicacion entre componentes</h2>
                <p>Contador <b>{this.state.contador}</b></p>
                <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para hijo 1"/>
                <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para hijo 2"/>
            </>
        )

    }
}


/* Aca estamos pasando una prop desde un componente hijo a un componente padre */
const Hijo = (props)=>{
    return (
        <>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementarContador}>+</button>
        </>
    )

}