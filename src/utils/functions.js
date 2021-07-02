import mysql from 'mysql';
import db from '../config/db.js';

function parseJSON(input){
    try {
        var o = JSON.parse(input);

        // Handle non-exception-throwing cases:
        // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
        // but... JSON.parse(null) returns null, and typeof null === "object", 
        // so we must check for that, too. Thankfully, null is falsey, so this suffices:
        if (o && typeof o === "object") {
            return o;
        }
    }
    catch (e) { }

    return input;
};

function castData(data){
    if(data === parseInt(data)){
        return data
    }else{
        return mysql.escape(data)
    }
}

function strsqlUpdate(data, callback){

  let bol

  let strsql_data = ''

  var strsql = ' UPDATE ' + data.table;
      strsql += ' SET last_modif = NOW(), ';
      for(var key in data.body){
        strsql += bol ? ',' : ''
        strsql_data += bol ? ',' : ''

        strsql += data.table + '.' + key + ' = ' + castData(data.body[key])
        bol = true
      }
      strsql += ' WHERE id = ' + data.body.id;
      
      db.query(strsql, null, function (error, results) {
        callback(error, results)
      });

}

function strsqlInsertUpdate(data, callback){

  let bol

  let strsql_data = ''
  let strsql_key = ''
  let strsql_values = ''

  var strsql = ' INSERT INTO User('
      for(var key in data){
        strsql_key += bol ? ',' : ''
        strsql_data += bol ? ',' : ''
        strsql_values += bol ? ',' : ''

        strsql_key += 'User.' + key
        strsql_data += castData(data[key])
        strsql_values += ' = VALUES(' + key + ')'
        bol = true
      }
      strsql += ') VALUES(' + strsql_data + ')'
      strsql += ' ON DUPLICATE KEY UPDATE ' + strsql_values
      
      
      db.query(strsql, null, function (error, results) { 
        callback(error, results)
      });

}

function strsqlDelete(data, callback){

  var strsql = ' UPDATE ' + data.table;
      strsql += ' SET last_modif = NOW(), deleted = 1';
      strsql += ' WHERE Articles.id = ' + data.id
      
      db.query(strsql, null, function (error, results) { 
        callback(error, data.id)
      });

}

export { 
    parseJSON, 
    castData,
    strsqlUpdate,
    strsqlDelete
}
