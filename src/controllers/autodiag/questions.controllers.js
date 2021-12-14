import db from '#config/db.js';
import async from 'async';
import _ from 'lodash';

import { Question } from '#models/autodiag/question.js';

import apiController from '#controllers/utils/api.controllers.js';

/* -------------------------------------------------------------------------- Get questions ------------------------------------------------------------ */

/* 


*/


function getAutodiagQuestions(data, callback) {

  var strsql = ' SELECT ';
      strsql += ' Autodiag_Questions.id, ';
      strsql += ' Autodiag_Questions.label, ';
      strsql += ' Autodiag_Questions.description, ';
      strsql += ' JSON_OBJECT("id", Autodiag_Categories.id, "label", Autodiag_Categories.label) AS category,';
      strsql += ' Autodiag_Questions.order,';
      strsql += ' CONCAT("[", GROUP_CONCAT(JSON_OBJECT(';
      strsql += '   "id", Autodiag_Answers.id, ';
      strsql += '   "label", Autodiag_Answers.label, ';
      strsql += '   "score", Autodiag_Answers.score,';
      strsql += '   "order", Autodiag_Answers.order,';
      strsql += '   "revert", Autodiag_Answers.revert,';
      strsql += '   "flag", Autodiag_Answers.flag';
      strsql += ' ) ORDER BY Autodiag_Answers.order), "]") AS answers';
      strsql += ' FROM Autodiag_Questions';
      strsql += ' INNER JOIN Autodiag_Answers ON Autodiag_Answers.id_question = Autodiag_Questions.id AND Autodiag_Answers.deleted IS NULL';
      strsql += ' INNER JOIN Autodiag_Categories ON Autodiag_Categories.id = Autodiag_Questions.id_category';
      strsql += ' WHERE Autodiag_Questions.deleted IS NULL';
      if(data.id){
        strsql += ' AND Autodiag_Questions.id = ' + data.id
      }
      strsql += ' GROUP BY Autodiag_Questions.id';
      strsql += ' ORDER BY Autodiag_Questions.order';

      db.query(strsql, null, function (error, results) {   
        for(let i=0; i<results.length;i++){
          results[i] = new Question(results[i])
        }
        callback(error, data.id && results.length === 1 ? results[0] : results)
      });

}

/* -------------------------------------------------------------------------- Create question ------------------------------------------------------------ */

function createQuestion(data, callback) {

  let id_question

  async.waterfall([
    function(callback){
      apiController.createItem({table:"Autodiag_Questions", item:_.omit(data, "answers"), order:true}, callback)
    },
    function(question, callback){
      id_question = question.id
      apiController.createItemsFromArray({table:"Autodiag_Answers", parent:{key:'id_question', value:id_question}, item:data.answers.map(v => ({...v, id_question:id_question}))}, callback)
    }
  ], function(err){
    if(err){
      callback(err)
    }else{
      getAutodiagQuestions({id:id_question}, callback)
    }
  })

}

function updateQuestion(data, callback) {
  async.parallel([
    function(callback){
      apiController.editItem({table:"Autodiag_Questions", item:_.omit(data, "answers"), order:true}, callback)
    },
    function(callback){
      apiController.editItemsFromArray({table:"Autodiag_Answers", item:data.answers.map(v => ({...v, id_question:data.id})),  parent:{key:'id_question', value:data.id}}, callback)
    }
  ], function(err){
    if(err){
      callback(err)
    }else{
      getAutodiagQuestions({id:data.id}, callback)
    }
  })

}

function deleteQuestion(data, callback) {

  async.parallel([
    function(callback){
      apiController.deleteItem({table:"Autodiag_Questions", id:data.id, order:true}, callback)
    },
    function(callback){
      apiController.deleteItemFromArray({table:"Autodiag_Answers", parent:{key:'id_question', value:data.id}}, callback)
    }
  ], function(err){
    callback(err, data)
  })

}



export default { 
  getAutodiagQuestions,
  createQuestion, 
  updateQuestion,
  deleteQuestion
}