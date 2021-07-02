import express from 'express';

import validateResourceMW from '../middleware/validateObject.middleware.js';
import auth from '../middleware/auth.middleware.js';

import { updateQuestionSchema, createQuestionSchema, createCategorySchema, autodiagSchema } from '../models/autodiag.js';
import autodiagController from '../controllers/autodiag.controllers.js';

const router = express.Router();

router.route('/autodiag/categories')
  .get(function(req, res) {
    console.log("get autodiag")
    autodiagController.getAutodiagCategory(null, function(err, results){
      res.status(200).json(results)
    })
  })
  .post(auth({admin:true}), validateResourceMW(createCategorySchema), function(req, res) {
    console.log("body", req.body)
    autodiagController.createAutodiagCategory(req.body, function(err, results){
      res.status(201).json(results)
    })
  })

router.route('/autodiag/categories/:id')
  .put(auth({admin:true}), validateResourceMW(createCategorySchema), function(req, res) {
    console.log("body", req.body)
    autodiagController.updateAutodiagCategory(req.body, function(err, results){
      res.status(201).json(results)
    })
  })

router.route('/autodiag/questions')
  .get(function(req, res) {
    console.log("get autodiag")
    autodiagController.getAutodiagQuestions({}, function(err, results){
      res.status(200).json(results)
    })
  })
  .post(auth({admin:true}), validateResourceMW(createQuestionSchema), function(req, res) {
    console.log("body", req.body)
    autodiagController.createAutodiagQuestion(req.body, function(err, results){
      res.status(201).json(results)
    })
  })

router.route('/autodiag/questions/:id')
  .put(auth({admin:true}), validateResourceMW(updateQuestionSchema), function(req, res) {
    console.log("body", req.body)
    autodiagController.updateAutodiagQuestions(req.body, function(err, results){
      res.status(201).json(results)
    })
  })
  .delete(auth({admin:true}), function(req, res) {
    console.log("body", req.body)
    autodiagController.deleteQuestionAutodiag(req.params, function(err, results){
      res.status(201).json(results)
    })
  })





  router.route('/autodiag')
  .get(function(req, res) {
    autodiagController.getAutodiag(null, function(err, results){
      res.status(200).json(results)
    })
  })
  .post(validateResourceMW(autodiagSchema), function(req, res) {
    console.log("body", req.body)
    autodiagController.subscribeAutodiag(req.body, function(err, results){
      req.login(results, function(err){
        console.log("go")
        res.status(200).json(results)
      })
    })
  })



export default router;