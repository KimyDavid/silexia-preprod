import express from 'express';
import routes from '#routes/utils/routes.js';

import { Partner, createPartnerSchema, updatePartnerSchema } from '#models/content/partner.js';
import { PartnerType, createPartnerTypeSchema, updatePartnerTypeSchema } from '#models/content/partner.js';
import apiController from '#controllers/utils/api.controllers.js';
import partnersController from '#controllers/content/partners.controllers.js';

const router = express.Router();

routes.api(
  router, 
  'partners', 
  { 
    create:createPartnerSchema, 
    update:updatePartnerSchema
  }, 
  {
    get:(item, callback) => partnersController.getPartners({}, callback),
    post:(item, callback) => apiController.createItem({table:'Partners', model:Partner, item:item, order:true}, callback),
    patch:(item, callback) => apiController.editItem({table:'Partners', model:Partner, item:item, order:true}, callback),
    delete:(item, callback) => apiController.deleteItem({table:'Partners', id:item.id, order:true}, callback)
  }
)

router.route('/partners/:id_partner')
  .get(function(req, res) {
    partnersController.getPartner({id:req.params.id_partner}, function(err, results){
      res.status(201).json(results)
    })
  })

router.route('/partners/page/:page')
  .get(function(req, res) {
    partnersController.getPartner({page:req.params.page}, function(err, results){
      res.status(201).json(results)
    })
  })



routes.api(
  router, 
  'partners_type', 
  { 
    create:createPartnerTypeSchema, 
    update:updatePartnerTypeSchema
  }, 
  {
    get:(item, callback) => apiController.getItem({table:'Partners_Type', model:PartnerType, item:item, order:true}, callback),
    post:(item, callback) => apiController.createItem({table:'Partners_Type', model:PartnerType, item:item, order:true}, callback),
    put:(item, callback) => apiController.editItem({table:'Partners_Type', model:PartnerType, item:item, order:true}, callback),
    delete:(item, callback) => apiController.deleteItem({table:'Partners_Type', id:item.id, order:true}, callback)
  }
)

export default router;