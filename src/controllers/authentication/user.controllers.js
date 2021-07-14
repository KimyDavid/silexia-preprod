import db from '#config/db.js';
import async from 'async';
import mysql from 'mysql';
import { v4 as uuidv4 } from 'uuid';

import { User } from '#models/authentication/user.js';

import mailController from '#controllers/utils/mail.controllers.js';

import { castData } from '#utils/functions.js';

function getUserFromEmail(data, callback) {

  var strsql = ' SELECT *';
      strsql += ' FROM User';
      strsql += ' WHERE email = ' + mysql.escape(data.email)
      
      db.query(strsql, null, function (error, results) { 
        callback(null, results.length === 1 ? results[0] : null)
      });
}

function getUserFromId(data, callback) {

  var strsql = ' SELECT *';
      strsql += ' FROM User';
      strsql += ' WHERE id = ' + data.id
      
      db.query(strsql, null, function (error, results) { 
        callback(null, results.length === 1 ? new User(results[0]) : null)
      });
}





function subscribe(data, callback) {

  let user

  async.waterfall([
    function(callback){
      updateUser(data, callback)
    }, 
    function(results, callback){
      user = results
      insertKeyVerif({id:user.id, type:0}, callback)
    },
    function(key, callback){
      mailController.verifAccount({email:data.email, link:process.env.ENDPOINT + '/verif_account?key=' + key}, callback)
    }
  ], function(err){
    callback(err, user)
  })

}

function insertUser(data, callback){

  let bol

  let strsql_data = ''

  var strsql = ' INSERT INTO User('
      for(var key in data){
        strsql += bol ? ',' : ''
        strsql_data += bol ? ',' : ''

        strsql += 'User.' + key
        strsql_data += castData(data[key])
        bol = true
      }
      strsql += ') VALUES(' + strsql_data + ')'
      
      
      db.query(strsql, null, function (error, results) { 
        callback(null, results.insertId)
      });

}


function insertKeyVerif(data, callback){

  let key = uuidv4()

  var strsql = ' INSERT INTO Verif_Key(id_user, Verif_Key.key, Verif_Key.type)';
      strsql += ' VALUES(' + data.id + ',' + mysql.escape(key) + ', ' + data.type + ')'
      
      db.query(strsql, null, function (error, results) { 
        callback(null, key)
      });

}








function verifAccount(data, callback){

  async.waterfall([
    function(callback){
      useKey({key:data.key, id_user:data.id_user}, callback)
    }, 
    function(callback){
      updateUser({id:data.id_user, body:{verif:2}}, callback)
    }
  ], function(err, results){
    callback(err, results)
  })

}

function useKey(data, callback){

  var strsql = ' UPDATE Verif_Key';
      strsql += ' SET deleted = 1';
      strsql += ' WHERE id_user = ' + data.id_user + ' AND Verif_Key.key = ' + mysql.escape(data.key) + ' AND deleted IS NULL';
      
      db.query(strsql, null, function (error, results) {
        if(results.affectedRows === 0){
          callback("wrong key")
        }else{
          callback(error)
        }
      });

}


function updateUser(data, callback){

  let bol

  let strsql_data = ''

  var strsql = ' UPDATE User';
      strsql += ' SET ';
      for(var key in data.body){
        strsql += bol ? ',' : ''
        strsql_data += bol ? ',' : ''

        strsql += 'User.' + key + ' = ' + castData(data.body[key])
        bol = true
      }
      strsql += ' WHERE id = ' + data.id;
      
      db.query(strsql, null, function (error, results) {
        if(error){
          callback(error)
        }else{
          getUserFromId({id:data.id}, callback)
        }
      });

}



function forgotPassword(data, callback){
   async.waterfall([
    function(callback){
      getUserFromEmail({email:data.email}, callback)
    },
    function(user, callback){
      insertKeyVerif({id:user.id, type:1}, callback)
    },
    function(key, callback){
      mailController.forgotPassword({email:data.email, link:process.env.ENDPOINT + '/reset_password?key=' + key}, callback)
    }
  ], function(err, results){
    callback(err, null)
  })
}


function resetPassword(data, callback){

  async.waterfall([
    function(callback){
      useKey({key:data.key, id_user:data.id_user}, callback)
    }, 
    function(callback){
      getUserFromId({id:data.id_user}, callback)
    }
  ], function(err, results){
    callback(err, results)
  })

}


export default { 
  getUserFromEmail,
  getUserFromId,
  subscribe,
  verifAccount,
  forgotPassword,
  resetPassword,
  updateUser,
  insertUser
}