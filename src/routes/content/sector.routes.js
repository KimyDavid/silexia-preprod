import express from 'express';
import routes from '#routes/utils/routes.js';

import { Sector, createSectorSchema, updateSectorSchema } from '#models/content/sector.js';
import apiController from '#controllers/utils/api.controllers.js';

const router = express.Router();

routes.api(
  router, 
  'sectors', 
  { 
    create:createSectorSchema, 
    update:updateSectorSchema
  }, 
  {
    get:(item, callback) => apiController.getItem({table:'Sectors', model:Sector, item:item, sort:'label'}, callback),
    post:(item, callback) => apiController.createItem({table:'Sectors', model:Sector, item:item, sort:'label'}, callback),
    put:(item, callback) => apiController.editItem({table:'Sectors', model:Sector, item:item, sort:'label'}, callback),
    delete:(item, callback) => apiController.deleteItem({table:'Sectors', id:item.id, sort:'label'}, callback)
  }
)

export default router;