import React, {Component} from 'react';


const EstadoAHijo = (props)=>{
    return(
        <div>
            <h2>{props.contadorHijo}</h2>
        </div>
    )
}


export default class Estado extends Component{ /* Aca estamos creando um componente basado en clases */

    constructor(props){  /* Aca vamos a definir el estado de la clase */
        super(props);   /* Aca estamos llamando el contructor de la clase 'Component' */
        this.state = {
            contador:0
        };
        /* Aca estamos creando una funcion que se va a modificar cada segundo */
        /* Cada ves que haya un cambio en el estado este se va a renderizar */
/*         setInterval(()=>{
            this.setState({
                contador: this.state.contador + 1
            });
        },1000) */

        
    }

    render(){
        return(
        <>
            <h2>El state</h2>
            <h3>{this.state.contador}</h3>
            <EstadoAHijo contadorHijo={this.state.contador}/>
        </>
        );
    }
}