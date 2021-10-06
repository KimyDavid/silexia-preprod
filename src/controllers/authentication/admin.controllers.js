import db from '#config/db.js';
import mysql from 'mysql';
import async from 'async';

import { parseJSON } from '#utils/functions.js';

import { Admin } from '#models/authentication/admin.js';
import { User } from '#models/authentication/user.js';

function getAdminFromEmail(data, callback) {

  var strsql = ' SELECT *';
      strsql += ' FROM Admin';
      strsql += ' WHERE email = ' + mysql.escape(data.email)
      
      db.query(strsql, null, function (error, results) { 
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

function getListUsers(callback) {

 async.parallel([
  function(callback){
    getUsers(callback)
  },
  function(callback){
    getAllUsersScores(callback)
  },
  function(callback){
    getAllScores(callback)
  }
 ], function(err, results){
    let users = results[0]
    let score_users = results[1]
    let score = results[2]

    let res = []

    for(let i=0; i<users.length; i++){
      let userData = {user:users[i], autodiag:[]}
      let score_total = 0
      let score_user_total = 0
      for(let j=0; j<score.length;j++){
        let index = score_users.findIndex(x => x.id_category === score[j].id_category && x.id_user === users[i].id)
        let score_user_cat = index == -1 ? 0 : score_users[index].score_user
        score_user_total += score_user_cat
        score_total += score[j].score_total
        userData.autodiag.push({category:score[j].category, score:score_user_cat, score_total:score[j].score_total})
      }
      userData.autodiag.sort = function(a, b){
        return a.category.order - b.category.order
      }
      userData.score_user_total = score_user_total
      userData.score_total = score_total
      res.push(userData)
    }

    callback(null, res)

 })

}

function getUsers(callback){
  
  var strsql = ' SELECT *';
      strsql += ' FROM User';
      strsql += ' WHERE verif = 2';
      strsql += ' ORDER BY id DESC';
      
      db.query(strsql, null, function (error, results) { 
        for(let i=0; i<results.length;i++){
          results[i] = new User(results[i], {list:true})
        }
        callback(null, results)
      });

}

function getAllUsersScores(callback){
  
  var strsql = ' SELECT id_user, id_category, SUM(autodiag_answers.score) As score_user';
      strsql += ' FROM autodiag_user_answers';
      strsql += ' INNER JOIN autodiag_answers ON autodiag_answers.id = autodiag_user_answers.id_answer';
      strsql += ' INNER JOIN autodiag_questions ON autodiag_questions.id = autodiag_answers.id_question';
      strsql += ' WHERE autodiag_answers.deleted IS NULL AND autodiag_questions.deleted IS NULL';
      strsql += ' GROUP BY id_user, id_category';
      
      db.query(strsql, null, function (error, results) { 
        callback(null, results)
      });

}

function getAllScores(callback){
  
  var strsql = ' SELECT id_category, SUM(autodiag_answers.score) As score_total, JSON_OBJECT("id", autodiag_categories.id, "label", autodiag_categories.label, "order", autodiag_categories.order) AS category';
      strsql += ' FROM autodiag_answers';
      strsql += ' INNER JOIN autodiag_questions ON autodiag_questions.id = autodiag_answers.id_question';
      strsql += ' INNER JOIN autodiag_categories ON autodiag_categories.id = autodiag_questions.id_category'
      strsql += ' WHERE autodiag_answers.deleted IS NULL AND autodiag_questions.deleted IS NULL AND autodiag_categories.deleted IS NULL';
      strsql += ' GROUP BY id_category';
      
      db.query(strsql, null, function (error, results) { 
        for(let i=0; i<results.length;i++){
          results[i].category = parseJSON(results[i].category)
        }
        callback(null, results)
      });

}

export default { 
  getAdminFromEmail,
  getAdminFromId,

  getListUsers
}