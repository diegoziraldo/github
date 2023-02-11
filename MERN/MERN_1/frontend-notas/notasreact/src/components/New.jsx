import React, {useState} from 'react';
import Global from '../Global.js';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const New = ()=>{

    const url = Global.url;

    const [article, setArticle] = useState({ /* Con este hook setearemos las propiedades del articulo */
        title: null,
        content: null,
        author: null,
    })

    const [redirect, setRedirect] = useState(false)

    //Aca vamos a capturar los datos del formulario:
    let titleRef = React.createRef();
    let contentRef = React.createRef();
    let authorRef = React.createRef();

    const changeState = ()=>{
        setArticle({
            title: titleRef.current.value,
            content: contentRef.current.value,
            author: authorRef.current.value,
        });
        console.log(article);
    }

    const sendData = (e)=>{
        //Evitamos que al recibir los datos se recargue la pantalla
        e.preventDefault();
        changeState();

        //Peticion HTTP por POST para guardar el articulo
        axios.post(url + 'save', article).then(res=>{
            setRedirect(true)
            console.log(res.data);
        });
    }

    if(redirect){
        return <Navigate to= 'articles' />
    }

    return(
        <div className='nueva-publicacion'>
            <div id='formulario' className='card mx-auto mb-3 mt-5' style={{width: '30em'}}>
                <div className='card-header text-dark'>
                    <h4>Publicar nuevo articulo</h4>
                </div>
                <div className='card-body'>
                    <form onSubmit={sendData}>
                        <div className='mb-3 '>
                            <label>Titulo</label>
                            <input type="text" className='form-control' id='title' name='title' ref={titleRef} onChange={changeState} required />
                        </div>
                        <div className='mb-3 '>
                            <label>Content</label>
                            <textarea type="text" className='form-control' id='content' name='content' rows="6" cols="30" ref={contentRef} onChange={changeState} required />
                        </div>
                        <div className='mb-3 '>
                            <label>Autor</label>
                            <input type="text" className='form-control' id='author' name='author' ref={authorRef} onChange={changeState} required />
                        </div>
                        <div className='mb-3 '>
                            <input type="submit" className='form-control btn btn-primary' id='publish' value='Publicar' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default New;