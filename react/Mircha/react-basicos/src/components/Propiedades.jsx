import React from 'react';
import PropTypes from 'prop-types'

export const Propiedades = (props)=>{
    return(
        <>
            <h2>Propiedades</h2>
            <h3>{props.porDefecto}</h3> {/* Aca estmos usando la propiedad por defecto que seteamos anteriormente */}
            <ul>
                <li>{props.cadena}</li> 
                <li>{props.numero}</li>
                <li>{props.buleano ? "Verdadero" : "Falso"}</li>
                <li>{props.arreglo.join(', ')}</li>
                <li>{props.objeto.Nombre + " " + props.objeto.Apellido}</li>
                <li>{props.funcion(9)}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </>
    )
}

//Aca estamos creando una propiedad por defecto
Propiedades.defaultProps = {
    porDefecto: "Las props",
};

//Con propTypes vamos a poder validar las propiedades con un tipo de dato en concreto
Propiedades.propsTypes = {
    numero: PropTypes.number
}
