import db from '#config/db.js';
import mysql from 'mysql';

import { Admin } from '#models/authentication/admin.js';

function getAdminFromEmail(data, callback) {

  var strsql = ' SELECT *';
      strsql += ' FROM Admin';
      strsql += ' WHERE email = ' + mysql.escape(data.email)
      
      db.query(strsql, function (error, results) { 
        callback(error, results.length === 1 ? results[0] : null)
      });

}

function getAdminFromId(data, callback) {

  var strsql = ' SELECT *';
      strsql += ' FROM Admin';
      strsql += ' WHERE id = ' + data.id
      
      db.query(strsql, null, function (error, results) { 
        callback(null, results.length === 1 ? new Admin(results[0]) : null)
      });

}


export default { 
  getAdminFromEmail,
  getAdminFromId
}