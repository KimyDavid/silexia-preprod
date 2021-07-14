import express from 'express';

import auth from '#middleware/auth.middleware.js';

import administrativeController from '#controllers/content/administrative.controllers.js';

const router = express.Router();

const administrative_types = [
  'legal_mentions',
  'cgv',
  'cgu',
  'privacy_policy'
]

const validateAdministrative = () => async (req, res, next) => {

  let index = administrative_types.findIndex(x => x === req.params.type)
  if(index === -1){
    res.status(400).json({error: 'Unknown administrative content'})
  }else{
    next()
  }

}

router.route('/administrative/:type')
  .get(validateAdministrative(), function(req, res){
    administrativeController.getAdministrativeContent(req.params.type, function(err, results){
      res.status(200).json(results)
    })
  })
  .put(auth({admin:true}), validateAdministrative(), function(req, res) {
    administrativeController.updateAdministrativeContent({type:req.params.type, text:req.body.text}, function(err, results){
      res.status(200).json(results)
    })
  })

export default router;