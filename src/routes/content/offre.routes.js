import express from 'express';
import routes from '#routes/utils/routes.js';

import { Offre, createOffreSchema, updateOffreSchema } from '#models/content/offre.js';
import apiController from '#controllers/utils/api.controllers.js';

const router = express.Router();

routes.api(
  router, 
  'offres', 
  { 
    create:createOffreSchema, 
    update:updateOffreSchema
  }, 
  {
    get:(item, callback) => apiController.getItem({table:'Offres', model:Offre, item:item, order:true}, callback),
    post:(item, callback) => apiController.createItem({table:'Offres', model:Offre, item:item, order:true}, callback),
    patch:(item, callback) => apiController.editItem({table:'Offres', model:Offre, item:item, order:true}, callback),
    delete:(item, callback) => apiController.deleteItem({table:'Offres', item:item, order:true}, callback)
  }
)

export default router;