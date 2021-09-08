import db from '#config/db.js';
import async from 'async';

import { Category } from '#models/autodiag/category.js';

import userController from '#controllers/authentication/user.controllers.js';


/* -------------------------------------------------------------------------- Get questions autodiag ------------------------------------------------------------ */

/* 


*/

function getAutodiag(data, callback) {

  var strsql = ' SELECT ';
      strsql += ' Autodiag_Categories.id,';
      strsql += ' Autodiag_Categories.label,';
      strsql += ' Autodiag_Categories.description,';
      strsql += ' CONCAT("[", GROUP_CONCAT(JSON_OBJECT(';
      strsql += '   "id", Autodiag.id, ';
      strsql += '   "label", Autodiag.label, ';
      strsql += '   "description", Autodiag.description, ';
      strsql += '   "order", Autodiag.order,';
      strsql += '   "answers", Autodiag.answers';
      strsql += ' ) ORDER BY Autodiag.order), "]") AS questions';
      strsql += ' FROM(';
      strsql += ' SELECT ';
      strsql += ' Autodiag_Questions.id, ';
      strsql += ' Autodiag_Questions.label, ';
      strsql += ' Autodiag_Questions.description, ';
      strsql += ' Autodiag_Questions.id_category,';
      strsql += ' Autodiag_Questions.order,';
      strsql += ' CONCAT("[", GROUP_CONCAT(JSON_OBJECT(';
      strsql += '   "id", Autodiag_Answers.id, ';
      strsql += '   "label", Autodiag_Answers.label, ';
      strsql += '   "order", Autodiag_Answers.order';
      strsql += ' ) ORDER BY Autodiag_Answers.order), "]") AS answers';
      strsql += ' FROM Autodiag_Questions';
      strsql += ' INNER JOIN Autodiag_Answers ON Autodiag_Answers.id_question = Autodiag_Questions.id AND Autodiag_Answers.deleted IS NULL';
      strsql += ' WHERE Autodiag_Questions.deleted IS NULL'
      strsql += ' GROUP BY Autodiag_Questions.id';
      strsql += ' )Autodiag ';
      strsql += ' INNER JOIN Autodiag_Categories ON Autodiag_Categories.id = Autodiag.id_category';
      strsql += ' WHERE Autodiag_Categories.deleted IS NULL';
      strsql += ' GROUP BY Autodiag_Categories.id';
      strsql += ' ORDER BY Autodiag_Categories.order';

      db.query(strsql, null, function (error, results) {   
        for(let i=0; i<results.length;i++){
          results[i] = new Category(results[i], {autodiag:true})
        }
        callback(error, results)
      });

}

/* -------------------------------------------------------------------------- Respond to autodiag ------------------------------------------------------------ */

/* 
  When a user complete the autodiag, we create a new entry into users' table, register the answers, and respond with the user object.
*/


function subscribeAutodiag(data, callback) {

  let id_user 

  async.waterfall([
    function(callback){
      userController.insertUser({verif:0}, callback)
    },
    function(id, callback){
      id_user = id
      insertAutodiagUserAnswers({id_user:id_user, answers:data.answers}, callback)
    },
    function(callback){
      userController.getUserFromId({id:id_user}, callback)
    }
  ], function(err, results){
    callback(err, results)
  })

}

function insertAutodiagUserAnswers(data, callback) {

  var strsql = ' INSERT INTO Autodiag_User_Answers(id_user, id_answer)';
      strsql += ' VALUES';
      for(let i=0; i<data.answers.length; i++){
        strsql += i>0 ? ',' : ''
        strsql += '(' + data.id_user + ',' + data.answers[i] + ')'
      }

      db.query(strsql, null, function (error) {   
        callback(error)
      });

}

/* -------------------------------------------------------------------------- Get results by user ------------------------------------------------------------ */

/* 

*/


function getAutodiagUser(data, callback) {

  var strsql = ' SELECT ac.id, ac.label, ac.description, ';
      strsql += ' CONCAT("[", GROUP_CONCAT(JSON_OBJECT("text", at2.text, "order", at2.order) ORDER BY at2.order), "]") AS tiers,';
      strsql += ' Results.score_user, ';
      strsql += ' Results.score_total,';
      strsql += ' Results.flags';
      strsql += ' FROM autodiag_categories ac ';
      strsql += ' LEFT JOIN(';
      strsql += '   SELECT';
      strsql += '   aq.id_category,';
      strsql += '   aq.order,';
      strsql += '   SUM(aa.score) AS score_total,';
      strsql += '   SUM(IF(aua.id IS NOT NULL, aa.score, 0)) AS score_user,';
      strsql += '   CONCAT("[", GROUP_CONCAT(IF(aua.id IS NOT NULL, aa.flag, NULL)), "]") AS flags';
      strsql += '   FROM autodiag_answers aa';
      strsql += '   LEFT JOIN autodiag_user_answers aua ON aua.id_answer = aa.id AND aua.id_user = ' + data.id;
      strsql += '   INNER JOIN autodiag_questions aq ON aq.id = aa.id_question';
      strsql += '   WHERE aq.deleted IS NULL AND aa.deleted IS NULL';
      strsql += '   GROUP BY aq.id_category ';
      strsql += ' )Results ON Results.id_category = ac.id';
      strsql += ' LEFT JOIN autodiag_tiers at2 ON at2.id_category = ac.id';
      strsql += ' GROUP BY ac.id';
      strsql += ' ORDER BY ac.order';

      db.query(strsql, null, function (error, results) { 
        for(let i=0; i<results.length; i++){
          results[i] =  new Category(results[i], {results:true})
        }  
        callback(error, results)
      });

}

export default { 
  getAutodiag,
  subscribeAutodiag,
  getAutodiagUser
}