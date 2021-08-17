import express from 'express';
import passport from '#config/passport_local.js';

import validateResourceMW from '#middleware/validateObject.middleware.js';
import auth from '#middleware/auth.middleware.js';

import { userLoginSchema, userCreateSchema, userForgetPasswordSchema, userUpdateSchema } from '#models/authentication/user.js';
import userController from '#controllers/authentication/user.controllers.js';

const router = express.Router();

router.post('/login', validateResourceMW(userLoginSchema), function(req, res, next) {
  passport.authenticate('local', function(err, results){
    if(err){
      res.status(400).json({error:err})
    }else{
      req.login(results, function(){
        res.status(200).json(results)
      })
    }
  })(req, res, next);
});

router.post('/subscribe', validateResourceMW(userCreateSchema), function(req, res) {
  req.body.id = req.user.id
  userController.subscribe(req.body, function(err, results){
    if(err){
      res.status(400).json({error:err})
    }else{
      req.login({id:results.id}, function(){
        res.status(200).json(results)
      })
    }
  })
});


router.get('/verif_account', auth(), function(req, res) {
  userController.verifAccount({id_user:req.user.id, key:req.query ? req.query.key : null}, function(err, results){
    if(err){
      res.status(400).json({error:err})
    }else{
      res.status(200).json(results)
    }
  })
});

router.post('/forgot_password', validateResourceMW(userForgetPasswordSchema), function(req, res) {
  userController.forgotPassword(req.body, function(err, results){
    if(err){
      res.status(400).json({error:err})
    }else{
      res.status(200).json(results)
    }
  })
});


router.get('/reset_password', function(req, res) {
  userController.resetPassword({id_user:req.user.id, key:req.query ? req.query.key : null}, function(err, results){
    if(err){
      res.status(400).json({error:err})
    }else{
      res.status(200).json(results)
    }
  })
});

router.patch('/users/:id', validateResourceMW(userUpdateSchema), function(req, res) {
  userController.updateUser({id:req.params.id, body:req.body}, function(err, results){
    if(err){
      res.status(400).json({error:err})
    }else{
      res.status(200).json(results)
    }
  })
});

export default router;