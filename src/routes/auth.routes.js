import express from 'express';
import passport from '../config/passport_local.js';

import validateResourceMW from '../middleware/validateObject.middleware.js';
import auth from '../middleware/auth.middleware.js';

import { adminLoginSchema } from '../models/admin.js';
import { userLoginSchema, userCreateSchema, userForgetPasswordSchema, userUpdateSchema } from '../models/user.js';
import authController from '../controllers/auth.controllers.js';

const router = express.Router();

router.post('/login', validateResourceMW(userLoginSchema), function(req, res, next) {
   console.log("body", req.body, req.user)

  passport.authenticate('local', function(err, results){
    console.log(err, results)
    if(err){
      res.status(400).json({errors:err})
    }else{
      req.login(results, function(err){
        console.log("go")
        res.status(200).json(results)
      })
    }
  })(req, res, next);
});


router.get('/auth', function(req, res) {
  console.log("body", req.user)
  if(!req.user){
    req.logout()
    res.status(200)
  }else{
    res.status(200).json(req.user)
  }
});

router.post('/subscribe', validateResourceMW(userCreateSchema), function(req, res) {
  console.log("subscribe", req.body, req.user)
  req.body.id = req.user.id
  authController.subscribe(req.body, function(err, results){
    if(err){
      res.status(400).json({errors:err})
    }else{
      req.login({id:results.id}, function(err){
        res.status(200).json(results)
      })
    }
  })
});


router.get('/verif_account', auth(), function(req, res) {
  authController.verifAccount({id_user:req.user.id, key:req.query ? req.query.key : null}, function(err, results){
    console.log(err, results)
    if(err){
      res.status(400).json({errors:err})
    }else{
      res.status(200).json(results)
    }
  })
});

router.post('/forgot_password', validateResourceMW(userForgetPasswordSchema), function(req, res) {
  authController.forgotPassword(req.body, function(err, results){
    if(err){
      res.status(400).json({errors:err})
    }else{
      res.status(200).json(results)
    }
  })
});


router.get('/reset_password', function(req, res) {
  authController.resetPassword({id_user:req.user.id, key:req.query ? req.query.key : null}, function(err, results){
    console.log(err, results)
    if(err){
      res.status(400).json({errors:err})
    }else{
      res.status(200).json(results)
    }
  })
});

router.patch('/users/:id', validateResourceMW(userUpdateSchema), function(req, res) {
  authController.updateUser({id:req.params.id, body:req.body}, function(err, results){
    console.log(err, results)
    if(err){
      res.status(400).json({errors:err})
    }else{
      res.status(200).json(results)
    }
  })
});







router.post('/admin/login', validateResourceMW(adminLoginSchema), function(req, res, next) {
   console.log("body", req.body, req.user)

  passport.authenticate('local-admin', function(err, results){
    console.log(err, results)
    if(err){
      res.status(400).json({errors:err})
    }else{
      req.login(results, function(err){
        console.log("go")
        res.status(200).json(results)
      })
    }
  })(req, res, next);
});

export default router;