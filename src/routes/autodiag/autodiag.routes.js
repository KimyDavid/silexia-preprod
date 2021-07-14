import express from 'express';

import validateResourceMW from '#middleware/validateObject.middleware.js';

import { autodiagSchema } from '#models/autodiag/autodiag.js';
import autodiagController from '#controllers/autodiag/autodiag.controllers.js';

const router = express.Router();


router.route('/autodiag')
  .get(function(req, res) {
    autodiagController.getAutodiag(null, function(err, results){
      res.status(200).json(results)
    })
  })
  .post(validateResourceMW(autodiagSchema), function(req, res) {
    autodiagController.subscribeAutodiag(req.body, function(err, results){
      req.login(results, function(){
        res.status(200).json(results)
      })
    })
  })


router.route('/autodiag/user/:id')
  .get(function(req, res) {
    autodiagController.getAutodiagUser(req.params, function(err, results){
      res.status(200).json(results)
    })
  })



export default router;