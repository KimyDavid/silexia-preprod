import db from '../config/db.js';
import async from 'async';
import mysql from 'mysql';
import _ from 'lodash';

import { Question, Category } from '../models/autodiag.js';

import authController from '../controllers/auth.controllers.js';

import { parseJSON, strsqlUpdate, castData } from '../utils/functions.js';

function getAutodiagCategory(data, callback) {

  var strsql = ' SELECT id, label';
      strsql += ' FROM Autodiag_Category';
      if(data.id){
        strsql += ' WHERE Autodiag_Category.id = ' + data.id
      }
      
      db.query(strsql, null, function (error, results) { 
        for(let i=0; i<results.length;i++){
          results[i] = new Category(results[i])
        } 
        callback(null, data.id && results.length === 1 ? results[0] : results)
      });

}

function createAutodiagCategory(data, callback) {

  var strsql = ' INSERT INTO Autodiag_Category(label)';
      strsql += ' VALUES(' + mysql.escape(data.label) + ')';
      
      db.query(strsql, null, function (error, results) {  
        data.id = results.insertId 
        callback(null, new Category(data))
      });

}

function updateAutodiagCategory(data, callback) {

  var strsql = ' UPDATE Autodiag_Category';
      strsql += ' SET label = ' + mysql.escape(data.label)
      strsql += ' WHERE id = ' + data.id;
      
      db.query(strsql, null, function (error, results) {  
        callback(null, new Category(data))
      });

}

/* -------------------------------------------------------------------------- Get questions ------------------------------------------------------------ */

/* 

Accessible by all the profiles, this method allow to fetch restaurants. 
Based on input, data is filtered by rating or owners (for owners' accounts only).
if id_restaurant is provided, this method returns only the concerned restaurant.

*/

function getAutodiag(data, callback) {

  var strsql = ' SELECT ';
      strsql += ' Autodiag_Category.id,';
      strsql += ' Autodiag_Category.label,';
      strsql += ' CONCAT("[", GROUP_CONCAT(JSON_OBJECT(';
      strsql += '   "id", Autodiag.id, ';
      strsql += '   "label", Autodiag.label, ';
      strsql += '   "order", Autodiag.order,';
      strsql += '   "answers", Autodiag.answers';
      strsql += ' ) ORDER BY Autodiag.order), "]") AS questions';
      strsql += ' FROM(';
      strsql += ' SELECT ';
      strsql += ' Autodiag_Questions.id, ';
      strsql += ' Autodiag_Questions.label, ';
      strsql += ' Autodiag_Questions.id_category,';
      strsql += ' Autodiag_Questions.order,';
      strsql += ' CONCAT("[", GROUP_CONCAT(JSON_OBJECT(';
      strsql += '   "id", Autodiag_Answers.id, ';
      strsql += '   "label", Autodiag_Answers.label, ';
      strsql += '   "score", Autodiag_Answers.score,';
      strsql += '   "order", Autodiag_Answers.order';
      strsql += ' ) ORDER BY Autodiag_Answers.order), "]") AS answers';
      strsql += ' FROM Autodiag_Questions';
      strsql += ' INNER JOIN Autodiag_Answers ON Autodiag_Answers.id_question = Autodiag_Questions.id';
      strsql += ' GROUP BY Autodiag_Questions.id';
      strsql += ' )Autodiag ';
      strsql += ' INNER JOIN Autodiag_Category ON Autodiag_Category.id = Autodiag.id_category';
      strsql += ' GROUP BY Autodiag_Category.id';
      strsql += ' ORDER BY Autodiag_Category.order';

      db.query(strsql, null, function (error, results) {   
        for(let i=0; i<results.length;i++){
          results[i] = new Category(results[i])
        }
        callback(null, results)
      });

}


function getAutodiagQuestions(data, callback) {

  var strsql = ' SELECT ';
      strsql += ' Autodiag_Questions.id, ';
      strsql += ' Autodiag_Questions.label, ';
      strsql += ' Autodiag_Questions.id_category,';
      strsql += ' Autodiag_Questions.order,';
      strsql += ' CONCAT("[", GROUP_CONCAT(JSON_OBJECT(';
      strsql += '   "id", Autodiag_Answers.id, ';
      strsql += '   "label", Autodiag_Answers.label, ';
      strsql += '   "score", Autodiag_Answers.score,';
      strsql += '   "order", Autodiag_Answers.order';
      strsql += ' ) ORDER BY Autodiag_Answers.order), "]") AS answers';
      strsql += ' FROM Autodiag_Questions';
      strsql += ' INNER JOIN Autodiag_Answers ON Autodiag_Answers.id_question = Autodiag_Questions.id AND Autodiag_Answers.deleted IS NULL';
      strsql += ' WHERE Autodiag_Questions.deleted IS NULL';
      if(data.id){
        strsql += ' AND Autodiag_Questions.id = ' + data.id
      }
      strsql += ' ORDER BY Autodiag_Questions.order';
      strsql += ' GROUP BY Autodiag_Questions.id';

      db.query(strsql, null, function (error, results) {   
        for(let i=0; i<results.length;i++){
          results[i] = new Question(results[i])
        }
        callback(null, data.id && results.length === 1 ? results[0] : results)
      });

}

/* -------------------------------------------------------------------------- Create restaurants ------------------------------------------------------------ */

/* 

Only accessible by owners, this method allow to create restaurants. 
It accepts a form-based input.
It returns the created restaurant, to add the concerned data on the front-end.

*/

function createAutodiagQuestion(data, callback) {

  async.waterfall([
    function(callback){
      insertAutodiagQestion(data, callback)
    },
    function(id_question, callback){
      console.log(id_question)
      data.id = id_question
      handleAutodiagAnswers({id_question:data.id, answers:data.answers}, callback)
    }
  ], function(err, results){
    data.answer = results
    callback(null, new Question(data))
  })
}

function insertAutodiagQestion(data, callback) {

  var strsql = ' INSERT INTO Autodiag_Questions(label, Autodiag_Questions.order, id_category) ';
      strsql += ' VALUES(' + mysql.escape(data.label) + ',' + mysql.escape(data.order) + ',' + mysql.escape(data.id_category) + ')';
      
      db.query(strsql, null, function (error, results) {   
        callback(error, results.insertId)
      });

}

function handleAutodiagAnswers(data, callback) {
console.log("ici", data, data.answers)
  async.map(data.answers, function(item, callback){
    console.log(item)
    insertAutodiagAnswer({id_question:data.id_question, answer:item}, callback)
  }, function(err, results){
    callback(err, results)
  })
}

function insertAutodiagAnswer(data, callback) {

  var strsql = ' INSERT INTO Autodiag_Answers(label, Autodiag_Answers.order, id_question, score) ';
      strsql += ' VALUES(' + mysql.escape(data.answer.label) + ',' + mysql.escape(data.answer.order) + ',' + mysql.escape(data.id_question) + ',' + mysql.escape(data.answer.score) + ')';
      
      db.query(strsql, null, function (error, results) {  
        let answer = data.answer
        answer.id = results.insertId
        answer.id_question = data.id_question
        console.log("insert answer")
        callback(null, answer)
      });

}

/* -------------------------------------------------------------------------- Edit restaurants ------------------------------------------------------------ */

/* 

Only accessible by admins, this method allow to modify restaurants. 
It accepts a form-based input.
It returns the modified restaurant, to update the concerned data on the front-end.

*/

function updateAutodiagQuestions(data, callback) {
  async.waterfall([
    function(callback){
      handleAutodiagQuestions(data, callback)
    },
    function(callback){
      handleAutodiagOrder(data, callback)
    }
  ], function(err, results){
    getAutodiagQuestions({id:data.id}, callback)
  })
}

function handleAutodiagQuestions(data, callback) {
  
  async.parallel([
    function(callback){
      updateAutodiagQuestion(data, callback)
    },
    function(callback){
      deleteAutodiagAnswersFromQuestion({id_question:data.id, answers:data.answers}, callback)
    },
    function(callback){
      updateAutodiagAnswersFromQuestion({id_question:data.id, answers:data.answers}, callback)
    }
  ], function(err, results){
    callback(err)
  })

}

function updateAutodiagQuestion(data, callback){
  strsqlUpdate({table:'Autodiag_Questions', body:_.omit(data, 'answers')}, callback)
}


function deleteAutodiagAnswersFromQuestion(data, callback){
  console.log("deleteAutodiagAnswersFromQuestion", data)
  var strsql = ' UPDATE Autodiag_Answers';
      strsql += ' SET last_modif = NOW(), deleted = 1';
      strsql += ' WHERE id_question = ' + data.id_question + ' AND id NOT IN('
      for(let i=0; i<data.answers.length;i++){
        strsql += i>0 ? ',' : ''
        strsql += data.answers[i].id
      }
      strsql += ')';

      console.log(strsql)

      db.query(strsql, null, function (error, results) {   
        callback(error, null)
      });

}

function updateAutodiagAnswersFromQuestion(data, callback){
  console.log("updateAutodiagAnswersFromQuestion", data)

  let strsql_data = '(' + data.id_question
  let strsql_key = 'id_question '
  let strsql_values = 'id_question = VALUES(id_question)'

  let keys = []
  for(var key in data.answers[0]){
    strsql_key += ', Autodiag_Answers.' + key
    strsql_values += ', Autodiag_Answers.' + key + ' = VALUES(Autodiag_Answers.' + key + ')'
    keys.push(key)
  }

  var strsql = ' INSERT INTO Autodiag_Answers('
      for(let i=0; i<data.answers.length;i++){
        if(i){
          strsql_data += ', (' + data.id_question
        }
        for(let j=0; j<keys.length; j++){
          strsql_data += ',' + castData(data.answers[i][keys[j]])
        }
        strsql_data += ')'
      }
      strsql += strsql_key + ') VALUES' + strsql_data
      strsql += ' ON DUPLICATE KEY UPDATE last_modif = NOW(), ' + strsql_values

      console.log(strsql)
      
      
      db.query(strsql, null, function (error, results) { 
        callback(error, results)
      });

}


function handleAutodiagOrder(data, callback) {
  
  async.parallel([
    function(callback){
      updateOrderQuestion(data, callback)
    },
    function(callback){
      updateOrderAnswers(data, callback)
    }
  ], function(err, results){
    callback(err)
  })

}

function updateOrderQuestion(data, callback){

  var strsql = ' INSERT INTO autodiag_questions(id, label, id_category, autodiag_questions.order)';
      strsql += ' SELECT aq.id, aq.label, aq.id_category, RANK() OVER(ORDER BY aq.ORDER, aq.last_modif DESC)';
      strsql += ' FROM autodiag_questions aq ';
      strsql += ' LEFT JOIN autodiag_questions aq2 ON aq2.id_category = aq.id_category ';
      strsql += ' WHERE aq.deleted IS NULL AND aq2.id = ' + data.id;
      strsql += ' ON DUPLICATE KEY UPDATE autodiag_questions.ORDER = VALUES(autodiag_questions.order)';


      console.log(strsql)

      db.query(strsql, null, function (error, results) {   
        callback(error, null)
      });

}

function updateOrderAnswers(data, callback){

  var strsql = ' INSERT INTO autodiag_answers(id, label, id_question, autodiag_answers.order)';
      strsql += ' SELECT autodiag_answers.id, autodiag_answers.label, autodiag_answers.id_question, RANK() OVER(ORDER BY autodiag_answers.ORDER, autodiag_answers.last_modif DESC)';
      strsql += ' FROM autodiag_answers ';
      strsql += ' WHERE autodiag_answers.deleted IS NULL AND autodiag_answers.id_question = ' + data.id;
      strsql += ' ON DUPLICATE KEY UPDATE autodiag_answers.ORDER = VALUES(autodiag_answers.order)';


      console.log(strsql)

      db.query(strsql, null, function (error, results) {   
        callback(error, null)
      });

}



/* -------------------------------------------------------------------------- Delete restaurants ------------------------------------------------------------ */

/* 

Only accessible by admins, this method allow to delete a restaurant. 
It accepts an id, whether the one of the restaurant for a direct suppression, or the one of the owner for an indirect suppression.
It returns the id of the concerned restaurant, to delete it on the front-side.

*/


function deleteQuestionAutodiag(data, callback) {

  async.waterfall([
    function(callback){
      deleteQuestion(data, callback)
    },
    function(callback){
      deleteAnswers(data, callback)
    },
    function(callback){
      handleAutodiagOrder(data, callback)
    }
  ], function(err, results){
    callback(null, data.id)
  })

}

function deleteQuestion(data, callback) {

  var strsql = ' UPDATE Autodiag_Questions';
      strsql += ' SET last_modif = NOW(), deleted = 1';
      strsql += ' WHERE id = ' + data.id;

      db.query(strsql, null, function (error, results) {   
        callback(error)
      });

}

function deleteAnswers(data, callback) {

  var strsql = ' UPDATE Autodiag_Answers';
      strsql += ' SET last_modif = NOW(), deleted = 1';
      strsql += ' WHERE id_question = ' + data.id;

      db.query(strsql, null, function (error, results) {   
        callback(error)
      });

}






function subscribeAutodiag(data, callback) {

  let id_user 

  async.waterfall([
    function(callback){
      authController.insertUser({verif:0}, callback)
    },
    function(id, callback){
      id_user = id
      insertAutodiagUserAnswers({id_user:id_user, answers:data.answers}, callback)
    },
    function(callback){
      authController.getFromId({id:id_user}, callback)
    }
  ], function(err, results){
    callback(null, results)
  })

}

function insertAutodiagUserAnswers(data, callback) {

  var strsql = ' INSERT INTO Autodiag_User_Answers(id_user, id_answer)';
      strsql += ' VALUES';
      for(let i=0; i<data.answers.length; i++){
        strsql += i>0 ? ',' : ''
        strsql += '(' + data.id_user + ',' + data.answers[i] + ')'
      }

      db.query(strsql, null, function (error, results) {   
        callback(error)
      });

}



export default { 
  getAutodiagCategory, createAutodiagCategory, updateAutodiagCategory,
  getAutodiag,
  createAutodiagQuestion, updateAutodiagQuestions, getAutodiagQuestions,
  deleteQuestionAutodiag,
  subscribeAutodiag
}