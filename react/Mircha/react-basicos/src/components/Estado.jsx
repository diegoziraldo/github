import React, {Component} from 'react';


export default class Estado extends Component{ /* Aca estamos creando una clase 'Estado' que extiende de la clase 'Component' de react */

    constructor(props){
        super(props);
        this.state = {
            contador:0
        };
    }

    render(){
        return(
        <>
            <h2>El state</h2>
        </>
        );
    }
}