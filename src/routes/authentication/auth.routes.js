import express from 'express';

const router = express.Router();

router.get('/auth', function(req, res) {
  if(!req.user){
    req.logout()
    res.status(200).json()
  }else{
    res.status(200).json(req.user)
  }
});

router.get('/logout', function(req, res) {
  if(req.user) req.logout()
  res.status(200).json()
});

export default router;