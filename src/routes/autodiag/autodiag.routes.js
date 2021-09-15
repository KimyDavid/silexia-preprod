import express from 'express';
import routes from '#routes/utils/routes.js';

import validateResourceMW from '#middleware/validateObject.middleware.js';

import { autodiagSchema } from '#models/autodiag/autodiag.js';
import { Tier, TierSchema } from '#models/autodiag/category.js';
import autodiagController from '#controllers/autodiag/autodiag.controllers.js';
import apiController from '#controllers/utils/api.controllers.js';

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

routes.api(
    router, 
    'autodiag/tiers', 
    { 
      create:TierSchema, 
      update:TierSchema
    }, 
    {
      get:(item, callback) => apiController.getItem({table:'Autodiag_Tiers', model:Tier, item:item, order:true, filter:[{key:'id_category', value:null}]}, callback),
      post:(item, callback) => apiController.createItem({table:'Autodiag_Tiers', model:Tier, item:item, order:true, filter:[{key:'id_category', value:null}]}, callback),
      put:(item, callback) => apiController.editItem({table:'Autodiag_Tiers', model:Tier, item:item, order:true, filter:[{key:'id_category', value:null}]}, callback),
      delete:(item, callback) => apiController.deleteItem({table:'Autodiag_Tiers', id:item.id, order:true, filter:[{key:'id_category', value:null}]}, callback)
    }
  )


export default router;