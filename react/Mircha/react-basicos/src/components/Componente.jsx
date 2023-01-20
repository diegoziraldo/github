import React, {Component} from "react";

//Aca estamos creando un componente de clase.
export class ComponenteClase extends Component{
   render(){
    return <h2>{this.props.msg}</h2>
   } 
}

//Aca estamos creando un componente funcinal
export const ComponenteFuncional = (props)=>{
    return <h2>{props.msg}</h2>
}

/* export default ComponenteClase;
export default ComponenteFuncional; */