import express from 'express';
import routes from '#routes/utils/routes.js';

import { Type, createTypeSchema, updateTypeSchema } from '#models/content/type.js';
import apiController from '#controllers/utils/api.controllers.js';

const router = express.Router();

routes.api(
  router, 
  'types', 
  { 
    create:createTypeSchema, 
    update:updateTypeSchema
  }, 
  {
    get:(item, callback) => apiController.getItem({table:'Types', model:Type, item:item, order:true}, callback),
    post:(item, callback) => apiController.createItem({table:'Types', model:Type, item:item, order:true}, callback),
    put:(item, callback) => apiController.editItem({table:'Types', model:Type, item:item, order:true}, callback),
    delete:(item, callback) => apiController.deleteItem({table:'Types', item:item, order:true}, callback)
  }
)

export default router;