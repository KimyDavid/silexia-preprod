import db from '#config/db.js';
import async from 'async';
import mysql from 'mysql';
import _ from 'lodash';

import { Category } from '#models/autodiag/category.js';
import { Result } from '#models/autodiag/autodiag.js';

import userController from '#controllers/authentication/user.controllers.js';

import { parseJSON, castData } from '#utils/functions.js';


/* -------------------------------------------------------------------------- Get questions ------------------------------------------------------------ */

/* 


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

/* -------------------------------------------------------------------------- Respond to autodiag ------------------------------------------------------------ */

/* 



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

/* -------------------------------------------------------------------------- Get results by user ------------------------------------------------------------ */

/* 

*/


function getAutodiagUser(data, callback) {

  	var strsql = ' SELECT Results.score, Results.category, at2.text AS tier';
		strsql += ' FROM(';
		strsql += ' 	SELECT SUM(score_user)/SUM(score_total) AS score,';
		strsql += ' 	CONCAT("[", GROUP_CONCAT(';
		strsql += ' 		JSON_OBJECT(';
		strsql += ' 			"id", Category_Results.id_category,';
		strsql += ' 			"label", Category_Results.label,';
		strsql += '				"result", JSON_OBJECT(';
		strsql += ' 				"score", score_user/score_total,';
		strsql += ' 				"tier", Category_Results.tier,';
		strsql += ' 				"flag", Category_Results.flags';
		strsql += ' 			)';
		strsql += ' 		) ORDER BY Category_Results.order';
		strsql += ' 	), "]") AS category';
		strsql += ' 	FROM(';
		strsql += ' 		SELECT Autodiag_Results.*, at2.text AS tier';
		strsql += ' 		FROM (';
		strsql += ' 			SELECT ';
		strsql += ' 			aq.id_category,';
		strsql += ' 			aq.label,';
		strsql += ' 			aq.order,';
		strsql += ' 			SUM(aa.score) AS score_total, ';
		strsql += ' 			SUM(IF(aua.id IS NOT NULL, aa.score, 0)) AS score_user, ';
		strsql += ' 			CONCAT("[", GROUP_CONCAT(IF(aua.id IS NOT NULL, aa.flag, NULL)), "]") AS flags';
		strsql += ' 			FROM autodiag_answers aa ';
		strsql += ' 			LEFT JOIN autodiag_user_answers aua ON aua.id_answer = aa.id AND aua.id_user = ' + data.id;
		strsql += ' 			INNER JOIN autodiag_questions aq ON aq.id = aa.id_question ';
		strsql += ' 			WHERE aq.deleted IS NULL AND aa.deleted IS NULL';
		strsql += ' 			GROUP BY aq.id_category 	';
		strsql += ' 		)Autodiag_Results';
		strsql += ' 		LEFT JOIN autodiag_tier at2 ON at2.id_category = Autodiag_Results.id_category AND Autodiag_Results.score_user/Autodiag_Results.score_total > at2.tier/3 AND Autodiag_Results.score_user/Autodiag_Results.score_total <= 1/3 + at2.tier/3';
		strsql += ' 	)Category_Results';
		strsql += ' )Results';
		strsql += ' LEFT JOIN autodiag_tier at2 ON at2.id_category IS NULL AND Results.score > at2.tier/3 AND Results.score <= 1/3 + at2.tier/3';

	db.query(strsql, null, function (error, results) {   
        callback(error, new Result(results[0]))
      });

}



export default { 
  getAutodiag,
  subscribeAutodiag,
  getAutodiagUser
}