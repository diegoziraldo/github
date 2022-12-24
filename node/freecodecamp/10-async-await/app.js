const ordenarProducto = (producto)=>{   //En esta funcion vamos retornar una promesa.
    return new Promise((resolve,reject)=>{
        console.log(`Ordenando: ${producto} de freecodecamp`);
        setTimeout(()=>{
            if (producto === 'taza') {
                resolve('Ordenando una taza')
            } else {
                reject('Este producto no esta disponible')
            }
        },1000)
    });
}

const procesarPedido = (respuesta)=>{
    return new Promise((resolve, reject)=>{
        console.log('Procesando respuesta');
        console.log(`La respuesta fue: ${respuesta}`);
        setTimeout(()=>{
            resolve('Gracias por su compra')
        },1000)
    })
}

/* ordenarProducto('taza')
    .then(respuesta =>{
        console.log('Respuesta recibida');
        console.log(respuesta);
        return procesarPedido(respuesta)
    })
    .then(respuestaProcesada =>{
        console.log(respuestaProcesada);
    })
    .catch(err => {
        console.log(err);
    }) */


    const realizarPedido = async(producto)=>{
        try {    
     const respuesta = await ordenarProducto(producto);
     console.log('Respuesta recibida');
     const respuestaProcesada = await procesarPedido(producto);
     console.log('Respuesta procesada');
        
       } catch (error) {
            console.log(error);
    }
}

realizarPedido('lapiz')