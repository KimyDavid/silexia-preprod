import express from 'express';
import passport from '#config/passport_local.js';

import validateResourceMW from '#middleware/validateObject.middleware.js';
import auth from '#middleware/auth.middleware.js';

import { adminLoginSchema } from '#models/authentication/admin.js';
import adminControllers from '#controllers/authentication/admin.controllers.js';

const router = express.Router();

router.post('/admin/login', validateResourceMW(adminLoginSchema), function(req, res, next) {

  passport.authenticate('local-admin', function(err, results){
    if(err){
      res.status(400).json({errors:err})
    }else{
      req.login(results, function(){
        res.status(200).json(results)
      })
    }
  })(req, res, next);
});


router.get('/admin/list_users', auth({admin:true}), function(req, res) {
  adminControllers.getListUsers(function(err, results){
    res.status(200).json(results)
  })
});

export default router;