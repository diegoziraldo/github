'use strict'

const article = require('../models/article.js');
let Article = require('../models/article.js') //Aca vamos a importar el modelo 'article'


//Creamos un objeto para disponer de todos los metodos de ruta que vamos a definir
let controller = {
    
    //Metodo guardar un articulo:

    save: (req,res)=>{
        let params = req.body;
        let article = new Article();

        article.title = params.title
        article.content = params.content
        article.author = params.author

        //Guardamos articulo
        article.save((err, articleStored)=>{
            if(err || !articleStored){
                return res.status(404).send({
                    status: 'error',
                    message: 'El articulo no se ha guardado'
                })
            }
            return res.status(200).send({
                status: 'success',
                articleStored
            });
        });
    },

    //Metodo obtener un articulo:
    getArticles: (req,res)=>{
        let query = Article.find({});
        query.sort('-date').exec((err,articles)=>{
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al extraer datos'
                })
            }
            if(!articles){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar'
                })
            }
            return res.status(200).send({
                status: 'error',
                articles
            })
        })
    },

    //Metodo eliminar un articulo:
    remove: (req,res)=>{
        //Obtener el id a traves de la url
        let articleId = req.params.id;

        Article.findOneAndDelete({_id:articleId},(err,articleRemoved)=>{
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error a eliminar el articulo'
                })
            }
            if(!articleRemoved){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha encontrado el articulo a eliminar'
                });
            }
            return res.status(200).send({
                status: 'success',
                message: articleRemoved
            });
        })
    }
}

module.exports = controller;