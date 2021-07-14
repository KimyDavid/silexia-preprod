import db from '#config/db.js';
import async from 'async';
import _ from 'lodash';

import { Category } from '#models/autodiag/category.js';

import apiController from '#controllers/utils/api.controllers.js';


/* -------------------------------------------------------------------------- Get categories ------------------------------------------------------------ */

/* 

*/

function getCategories(data, callback) {

  var strsql = ' SELECT ';
      strsql += ' Autodiag_Categories.id,';
      strsql += ' Autodiag_Categories.label,';
      strsql += ' Autodiag_Categories.description,';
      strsql += ' CONCAT("[", GROUP_CONCAT(JSON_OBJECT(';
      strsql += '   "id", Autodiag_Tiers.id, ';
      strsql += '   "text", Autodiag_Tiers.text, ';
      strsql += '   "order", Autodiag_Tiers.order';
      strsql += ' ) ORDER BY Autodiag_Tiers.order), "]") AS tiers';
      strsql += ' FROM Autodiag_Categories';
      strsql += ' INNER JOIN Autodiag_Tiers ON Autodiag_Tiers.id_category = Autodiag_Categories.id';
      if(data.id){
        strsql += ' WHERE Autodiag_Categories.id = ' + data.id
      }
      strsql += ' GROUP BY Autodiag_Categories.id';
      strsql += ' ORDER BY Autodiag_Categories.order';

      db.query(strsql, null, function (error, results) {   
        for(let i=0; i<results.length;i++){
          results[i] = new Category(results[i])
        }
        callback(error, data.id && results.length === 1 ? results[0] : results)
      });

}


function createCategory(data, callback) {

  let id_category

  async.waterfall([
    function(callback){
      apiController.createItem({table:"Autodiag_Categories", item:_.omit(data, "tiers"), order:true}, callback)
    },
    function(category, callback){
      id_category = category.id
      apiController.createItemsFromArray({table:"Autodiag_Tiers", parent:{key:'id_category', value:id_category}, item:data.tiers.map(v => ({...v, id_category:id_category}))}, callback)
    }
  ], function(err){
    if(err){
      callback(err)
    }else{
      getCategories({id:id_category}, callback)
    }
  })

}

function updateCategory(data, callback) {

  async.parallel([
    function(callback){
      apiController.editItem({table:"Autodiag_Categories", item:_.omit(data, "tiers"), order:true}, callback)
    },
    function(callback){
      apiController.editItemsFromArray({table:"Autodiag_Tiers", item:data.tiers.map(v => ({...v, id_category:data.id})),  parent:{key:'id_category', value:data.id}}, callback)
    }
  ], function(err){
    if(err){
      callback(err)
    }else{
      getCategories({id:data.id}, callback)
    }
  })

}

function deleteCategory(data, callback) {

  async.parallel([
    function(callback){
      apiController.deleteItem({table:"Autodiag_Categories", id:data.id, order:true}, callback)
    },
    function(callback){
      apiController.deleteItemFromArray({table:"Autodiag_Tiers", parent:{key:'id_category', value:data.id}}, callback)
    }
  ], function(err){
    callback(err, data)
  })

}



export default { 
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory
}