import express from 'express';
import passport from '#config/passport_local.js';

import validateResourceMW from '#middleware/validateObject.middleware.js';
import auth from '#middleware/auth.middleware.js';

const router = express.Router();


router.get('/auth', function(req, res) {
  if(!req.user){
    req.logout()
    res.status(200)
  }else{
    res.status(200).json(req.user)
  }
});

export default router;