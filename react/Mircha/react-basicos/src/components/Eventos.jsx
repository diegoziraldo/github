import React, {Component} from "react";

export default class Eventos extends Component{

    constructor(props){
        super(props);
        this.state = {
            contador:0
        };
        /* De esta manera vamos a poder enlazar el this de la clase con el this del metodo */
        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }

    sumar(e){
        this.setState({
            contador: this.state.contador +1,
        })
    }
    restar(e){
        this.setState({
            contador: this.state.contador -1,
        })
    }


    render(){
        return(
            <>
                <h2>Eventos en componentes de clase</h2>
                <nav>
                    <button onClick={this.restar}>-</button>
                    <button onClick={this.sumar}>+</button>

                </nav>
                <h3>{this.state.contador}</h3>
            </>
        )
    }
}