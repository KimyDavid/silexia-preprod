import db from '#config/db.js';
import async from 'async';
import mysql from 'mysql';
import { v4 as uuidv4 } from 'uuid';

import { Admin } from '#models/authentication/admin.js';

import { parseJSON, castData } from '#utils/functions.js';

function getAdminFromEmail(data, callback) {

  var strsql = ' SELECT *';
      strsql += ' FROM Admin';
      strsql += ' WHERE email = ' + mysql.escape(data.email)
      
      db.query(strsql, null, function (error, results) { 
        callback(null, results.length === 1 ? results[0] : null)
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