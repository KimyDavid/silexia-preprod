import express from 'express';
import routes from '#routes/utils/routes.js';

import { Size, createSizeSchema, updateSizeSchema } from '#models/content/size.js';
import apiController from '#controllers/utils/api.controllers.js';

const router = express.Router();

routes.api(
  router, 
  'sizes', 
  { 
    create:createSizeSchema, 
    update:updateSizeSchema
  }, 
  {
    get:(item, callback) => apiController.getItem({table:'Sizes', model:Size, item:item, order:true}, callback),
    post:(item, callback) => apiController.createItem({table:'Sizes', model:Size, item:item, order:true}, callback),
    put:(item, callback) => apiController.editItem({table:'Sizes', model:Size, item:item, order:true}, callback),
    delete:(item, callback) => apiController.deleteItem({table:'Sizes', id:item.id, order:true}, callback)
  }
)

export default router;