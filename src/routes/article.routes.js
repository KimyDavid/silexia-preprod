import express from 'express';

import validateResourceMW from '../middleware/validateObject.middleware.js';
import auth from '../middleware/auth.middleware.js';

import { createArticleSchema } from '../models/article.js';
import articleController from '../controllers/article.controllers.js';

const router = express.Router();

router.route('/articles')
  .get(function(req, res) {
    console.log("get articles")
    articleController.getArticles({}, function(err, results){
      res.status(200).json(results)
    })
  })
  .post(auth({admin:true}), validateResourceMW(createArticleSchema), function(req, res) {
    console.log("body", req.body)
    articleController.createArticle(req.body, function(err, results){
      res.status(201).json(results)
    })
  })



export default router;