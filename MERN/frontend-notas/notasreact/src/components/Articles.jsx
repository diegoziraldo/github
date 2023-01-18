import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Global from '../Global';

const Articles = ()=>{
    
    const [articles, setArticles] = useState([]);
    const url = Global.url;

    useEffect(()=>{
        getArticles();
        console.log(articles);
    }, [articles.length]);

    const getArticles = (res)=>{
        axios.get(url + 'articles').then(result=>{
            setArticles(res.data.articles)
        })
    }

    return(
        <div className='publicaciones'>
            <h1 className='mt-5'>Articulos</h1>
            <div className='row row-cols-md'></div>
        </div>
    );
}
