import express from 'express';
import routes from '#routes/utils/routes.js';

import { createQuestionSchema, updateQuestionSchema } from '#models/autodiag/question.js';
import questionsController from '#controllers/autodiag/questions.controllers.js';

const router = express.Router();

routes.api(
  router, 
  'autodiag/questions', 
  { 
    create:createQuestionSchema, 
    update:updateQuestionSchema
  }, 
  {
    get:(item, callback) => questionsController.getAutodiagQuestions({}, callback),
    post:(item, callback) => questionsController.createQuestion(item, callback),
    put:(item, callback) => questionsController.updateQuestion(item, callback),
    delete:(item, callback) => questionsController.deleteQuestion(item, callback)
  }
)

export default router;