import React, {Component} from "react";
import data from '../helpers/data.json'; /* Aca estamo importando un archivo JSON */



const ElementoLista = (props)=>{
    return(
        <li>
            <a href={props.el.web} target="_blank">{props.el.web}</a>
        </li>
    )
}

export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state = {
            seasons: ['Primavera','Verano','Otoño','Invierno']
        }
    }
    render(){

        return(
            <>
                <h2>Renderizado de elementos</h2>
                <h3>Estaciones del año</h3>
                <ul>
                    {
                       this.state.seasons.map((el,index)=>(
                            <li key={index}>{el}</li>
                       )) 
                    }
                </ul>
                <h3>Frameworks FrontEnd Javascript</h3>
                <ul>
                    {data.frameworks.map((el, id)=>(
                        <ElementoLista key={id} el={el}/>
                    ))}
                </ul>
            </>
        )
    }
}