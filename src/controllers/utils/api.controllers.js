import db from '#config/db.js';
import async from 'async';
import mysql from 'mysql';
import _ from 'lodash';

import imageController from '#controllers/utils/image.controllers.js';

import { parseJSON, castData } from '#utils/functions.js';


/* -------------------------------------------------------------------------- Utils ------------------------------------------------------------ */

function getItem(data, callback) {

  var strsql = ' SELECT *';
      strsql += ' FROM ' + data.table;
      strsql += ' WHERE deleted IS NULL';
      if(data.id){
        strsql += ' AND id = ' + data.id
      }
      if(data.order){
        strsql += ' ORDER BY ' + data.table + '.order'
      }else if(data.sort){
        strsql += ' ORDER BY ' + data.table + '.' + data.sort
      }
      
      db.query(strsql, null, function (error, results) { 
        if(data.model){
          for(let i=0; i<results.length; i++){
            results[i] = new data.model(results[i])
          }
        }
        callback(error, data.id && results.length === 1 ? results[0] : results)
      });

}


function updateItem(data, callback) {
  
  let bol

  let strsql_data = ''

  var strsql = ' UPDATE ' + data.table;
      strsql += ' SET last_modif = NOW(), ';
      for(var key in data.item){
        strsql += bol ? ',' : ''
        strsql_data += bol ? ',' : ''

        strsql += data.table + '.' + key + ' = ' + castData(data.item[key])
        bol = true
      }
      strsql += ' WHERE id = ' + data.item.id;
      
      db.query(strsql, null, function (error, results) {
        callback(error, results)
      });
}

function updateInsertItem(data, callback){

  let bol

  let strsql_data = ''
  let strsql_key = ''
  let strsql_values = ''

  var strsql = ' INSERT INTO ' + data.table + '('
      for(var key in data.item){
        strsql_key += bol ? ',' : ''
        strsql_data += bol ? ',' : ''
        strsql_values += bol ? ',' : ''

        strsql_key += data.table + '.' + key
        strsql_data += castData(data.item[key])
        strsql_values += data.table + '.' + key + ' = VALUES(' + data.table + '.' + key + ')'
        bol = true
      }
      strsql += strsql_key + ') VALUES(' + strsql_data + ')'
      strsql += ' ON DUPLICATE KEY UPDATE ' + strsql_values
      
      
      db.query(strsql, null, function (error, results) { 
        callback(error, results.insertId)
      });

}


function deleteItem(data, callback) {
  
  var strsql = ' UPDATE ' + data.table;
      strsql += ' SET last_modif = NOW(), deleted = 1';
      strsql += ' WHERE id = ' + data.id
      
      db.query(strsql, null, function (error, results) { 
        callback(error, {id:data.id})
      });
}

/* -------------------------------------------------------------------------- Utils array ------------------------------------------------------------ */

function deleteItemFromArray(data, callback){
  var strsql = ' UPDATE ' + data.table;
      strsql += ' SET last_modif = NOW(), deleted = 1';
      strsql += ' WHERE ' + data.parent.key + ' = ' + data.parent.value
      if(data.item){
        strsql +=  ' AND id NOT IN('
        for(let i=0; i<data.item.length;i++){
          strsql += i>0 ? ',' : ''
          strsql += data.item[i].id
        }
        strsql += ')';
      }

      db.query(strsql, null, function (error, results) {   
        callback(error, null)
      });

}

/* -------------------------------------------------------------------------- Create item ------------------------------------------------------------ */

function createItem(data, callback){

  let id_item

  async.waterfall([
    function(callback){
      handleInsertItem(data, callback)
    },
    function(id, callback){
      id_item = id
      updateOrder(data, callback)
    }
  ], function(err, results){
    getItem({table:data.table, model:data.model, id:id_item}, callback)
  })

}

function handleInsertItem(data, callback){

  let id_item
  async.waterfall([
    function(callback){
      updateInsertItem({table:data.table, item:_.omit(data.item, "image")}, callback)
    },
    function(id, callback){
      id_item = id
      if(data.item.image){
        imageController.uploadImage({image:data.item.image.tempFilePath, name:data.table.toLowerCase() + '_' + id}, callback)
      }else{
        callback(null, null)
      }
    },
    function(version, callback){
      if(version){
        updateItem({table:data.table, item:{version:version, id:id_item}}, callback)
      }else{
        callback(null, null)
      }
    }
  ], function(err, results){
    callback(err, id_item)
  })

}

function createItemsFromArray(data, callback){

  async.map(data.item, function(item, callback){
    handleInsertItem({table:data.table, item:item}, callback)
  }, function(err, results){
    updateOrder(data, callback)
  })

}

/*function insertItem(data, callback) {
  
  let bol
  let strsql_key = ''
  let strsql_data = ''

  var strsql = ' INSERT INTO ' + data.table + '(';
      for(var key in data.item){
        strsql_key += bol ? ',' : ''
        strsql_data += bol ? ',' : ''

        strsql_key += data.table + '.' + key
        strsql_data += castData(data.item[key])
        bol = true
      }
      strsql += strsql_key + ') VALUES(' + strsql_data + ')';
      
      db.query(strsql, null, function (error, results) { 
        callback(error, results.insertId)
      });

}*/




/* -------------------------------------------------------------------------- Update item ------------------------------------------------------------ */


function editItem(data, callback){

  async.waterfall([
    function(callback){
      handleEditItem(data, callback)
    },
    function(res, callback){
      updateOrder(data, callback)
    }
  ], function(err, results){
    getItem({table:data.table, model:data.model, id:data.item.id}, callback)
  })

}


function handleEditItem(data, callback){

  async.waterfall([
    function(callback){
      if(data.item.image){
        imageController.uploadImage({image:data.item.image ? data.item.image.tempFilePath : null, name:data.table.toLowerCase() + '_' + data.id}, callback)
      }else{
        callback(null, null)
      }
    },
    function(version, callback){
      if(version){
        data.item.version = version
      }
      updateInsertItem({table:data.table, item:_.omit(data.item, "image")}, callback)
    }
  ], function(err, results){
    callback(err, data.item.id)
  })

}

function editItemsFromArray(data, callback){

  async.parallel([
    function(callback){
      deleteItemFromArray(data, callback)
    },
    function(callback){
      async.map(data.item, function(item, callback){
        handleInsertItem({table:data.table, item:item}, callback)
      }, function(err, results){
        callback(null, null)
      })
    }
  ], function(err, results){
    updateOrder(data, callback)
  })

}




/* -------------------------------------------------------------------------- Order ------------------------------------------------------------ */



function updateOrder(data, callback){

  if(!data.order){
    callback(null, null)
    return
  }

  var strsql = ' INSERT INTO ' + data.table + '(id, ' + data.table + '.order)';
      strsql += ' SELECT tab.id, RANK() OVER(ORDER BY tab.ORDER, tab.last_modif DESC)';
      strsql += ' FROM ' + data.table + ' tab ';
      strsql += ' WHERE tab.deleted IS NULL';
      if(data.parent){
        strsql += ' AND tab.' + data.parent.key + ' = ' + data.parent.value
      }
      strsql += ' ON DUPLICATE KEY UPDATE ' + data.table + '.order = VALUES(' + data.table + '.order)';

      db.query(strsql, null, function (error, results) {   
        callback(error)
      });

}


export default { 
  getItem,
  editItem,
  editItemsFromArray,
  deleteItem,
  deleteItemFromArray,
  createItem,
  createItemsFromArray
}