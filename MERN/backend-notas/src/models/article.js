'use strict'

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Aca vamos a crear un Schema
let ArticleAchema = new Schema({
    title: String,
    date: {type: Date, default:Date.now},
    content: String,
    author: String
})

module.exports = mongoose.model('Article', ArticleSchema);