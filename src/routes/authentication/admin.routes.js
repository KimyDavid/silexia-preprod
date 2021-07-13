import express from 'express';
import passport from '#config/passport_local.js';

import validateResourceMW from '#middleware/validateObject.middleware.js';

import { adminLoginSchema } from '#models/authentication/admin.js';

const router = express.Router();

router.post('/admin/login', validateResourceMW(adminLoginSchema), function(req, res, next) {

  passport.authenticate('local-admin', function(err, results){
    if(err){
      res.status(400).json({errors:err})
    }else{
      req.login(results, function(err){
        res.status(200).json(results)
      })
    }
  })(req, res, next);
});

export default router;