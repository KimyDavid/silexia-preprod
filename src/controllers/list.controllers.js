import db from '../config/db.js';
import async from 'async';
import mysql from 'mysql';

import { List } from '../models/list.js';

import { parseJSON } from '../utils/functions.js';

function getList(data, callback) {

  console.log(data)

  var strsql = ' SELECT *';
      strsql += ' FROM ' + data.table;
      strsql += ' WHERE deleted IS NULL';
      if(data.id){
        strsql += ' AND id = ' + data.id
      }else{
        strsql += ' ORDER BY ' + data.table + '.order, ' + data.table + '.label'
      }
      
      db.query(strsql, null, function (error, results) { 
        for(let i=0; i<results.length;i++){
          results[i] = new List(results[i])
        }
        console.log(results)
        callback(null, data.id && results.length === 1 ? results[0] : results)
      });

}

function createList(data, callback) {

  var strsql = ' INSERT INTO ' + data.table + '(label, ' + data.table + '.order) ';
      strsql += ' VALUES(' +  mysql.escape(data.item.label) + ', ' + mysql.escape(data.item.order) + ')';
      
      db.query(strsql, null, function (error, results) { 
        data.item.id = results.insertId
        callback(null, data.item)
      });

}

function updateList(data, callback) {

  var strsql = ' UPDATE ' + data.table;
      strsql += ' SET label = ' + mysql.escape(data.item.label) + ', ' + data.table + '.order = ' + mysql.escape(data.item.order)
      strsql += ' WHERE id = ' + data.item.id
      
      db.query(strsql, null, function (error, results) { 
        callback(null, data.item)
      });

}


function deleteList(data, callback) {

  var strsql = ' UPDATE ' + data.table;
      strsql += ' SET deleted = 1';
      strsql += ' WHERE id = ' + data.id
      
      db.query(strsql, null, function (error, results) { 
        console.log(results)
        callback(null, {id:data.id})
      });

}


export default { 
  getList, createList, updateList, deleteList 
}