import express from 'express';
import routes from '#routes/utils/routes.js';

import validateResourceMW from '#middleware/validateObject.middleware.js';
import auth from '#middleware/auth.middleware.js';

import { updateQuestionSchema, createQuestionSchema, } from '#models/autodiag/question.js';
import questionsController from '#controllers/autodiag/question.controllers.js';

const router = express.Router();

router.route('/autodiag/questions')
  .get(function(req, res) {
    questionsController.getAutodiagQuestions({}, function(err, results){
      res.status(200).json(results)
    })
  })
  .post(auth({admin:true}), validateResourceMW(createQuestionSchema), function(req, res) {
    questionsController.createAutodiagQuestion(req.body, function(err, results){
      res.status(201).json(results)
    })
  })

router.route('/autodiag/questions/:id')
  .put(auth({admin:true}), validateResourceMW(updateQuestionSchema), function(req, res) {
    questionsController.updateAutodiagQuestions(req.body, function(err, results){
      res.status(201).json(results)
    })
  })
  .delete(auth({admin:true}), function(req, res) {
    questionsController.deleteQuestionAutodiag(req.params, function(err, results){
      res.status(201).json(results)
    })
  })

export default router;