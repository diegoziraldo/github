import React, {Component} from "react";

export class EventosES6 extends Component{

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
                <h2>Eventos en componentes de clase ES6</h2>
                <nav>
                    <button onClick={this.restar}>-</button>
                    <button onClick={this.sumar}>+</button>

                </nav>
                <h3>{this.state.contador}</h3>
            </>
        )
    }
}


/* Peoperty initializer */
export class EventosES7 extends Component{

    state = {
            contador:0
        };

    
/* Arrow function */
    sumar = (e)=>{
        this.setState({
            contador: this.state.contador +1,
        })
    }
    restar = (e)=>{
        this.setState({
            contador: this.state.contador -1,
        })
    }


    render(){
        return(
            <>
                <h2>Eventos en componentes de clase ES7</h2>
                <nav>
                    <button onClick={this.restar}>-</button>
                    <button onClick={this.sumar}>+</button>

                </nav>
                <h3>{this.state.contador}</h3>
            </>
        )
    }
}


const Boton = ({myOnClick})=>(<button onClick={myOnClick}>Boton hecho Componente</button>)


export class MasSobreEventos extends Component{

    handleClick=(e, mensaje)=>{

        let mensajeCorregido = (mensaje === undefined) ? '' : mensaje

        console.log(e);
        console.log(mensajeCorregido);

    }


    render(){
        return(
            <>
                <h2>Mas sobre eventos</h2>
                <button onClick={this.handleClick}>Saludar</button>
                <br></br>
                <button onClick={(e)=>this.handleClick(e,'Mensaje desde parametro de evento')}>Pasar parametro desde un evento</button>
                <br></br>
                {/* Evento personalizado */}
                <Boton myOnClick={this.handleClick}/>
            </>
        )
    }
}