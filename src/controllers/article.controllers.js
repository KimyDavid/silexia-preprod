import db from '../config/db.js';
import async from 'async';
import mysql from 'mysql';

import { Article } from '../models/article.js';

import imageController from '../controllers/image.controllers.js';

import { parseJSON, castData, strsqlUpdate, strsqlDelete } from '../utils/functions.js';

function getArticles(data, callback) {

  var strsql = ' SELECT id, title, text, version';
      strsql += ' FROM Articles';
      strsql += ' WHERE deleted IS NULL';
      if(data.id){
        strsql += ' AND Articles.id = ' + data.id
      }
      
      db.query(strsql, null, function (error, results) { 
        for(let i=0; i<results.length; i++){
          results[i] = new Article(results[i])
        }
        callback(error, data.id && results.length === 1 ? results[0] : results)
      });

}

function updateArticle(data, callback) {
  strsqlUpdate({table:'Articles', body:data}, callback)
}

function deleteArticle(data, callback) {
  strsqlDelete({table:"Articles", id:data.id}, callback)
}

function createArticle(data, callback){

  let id_article

  async.waterfall([
    function(callback){
      insertArticle(data, callback)
    },
    function(id, callback){
      id_article = id
      imageController.uploadImage({image:data.image.tempFilePath, name:'article_' + id}, callback)
    },
    function(version, callback){
      updateArticle({version:version, id:id_article}, callback)
    }
  ], function(err, results){
    getArticles({id:id_article}, callback)
  })

}

function insertArticle(data, callback) {

  var strsql = ' INSERT INTO Articles(text, title)';
      strsql += ' VALUES(' + mysql.escape(data.title) + ',' + mysql.escape(data.text) + ')';
      
      db.query(strsql, null, function (error, results) { 
        callback(error, results.insertId)
      });

}


export default { 
  getArticles,
  updateArticle,
  deleteArticle,
  createArticle
}