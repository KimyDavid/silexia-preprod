import express from 'express';

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