import db from '#config/db.js';
import mysql from 'mysql';

import { Administrative } from '#models/content/administrative.js';

function getAdministrativeContent(data, callback) {

  var strsql = ' SELECT *';
      strsql += ' FROM Administrative';
      strsql += ' WHERE Administrative.type = ' + mysql.escape(data);
      
      db.query(strsql, null, function (error, results) { 
        callback(error, results.length === 1 ? new Administrative(results[0]) : null)
      });

}

function updateAdministrativeContent(data, callback) {

  var strsql = ' UPDATE Administrative';
      strsql += ' SET last_modif = NOW(), text = ' + mysql.escape(data.text);
      strsql += ' WHERE Administrative.type = ' + mysql.escape(data.type);
      
      db.query(strsql, null, function (error) {
        if(error){
          callback(error)
        }else{ 
          getAdministrativeContent(data.type, callback)
        }
      });

}

export default { 
  getAdministrativeContent,
  updateAdministrativeContent
}