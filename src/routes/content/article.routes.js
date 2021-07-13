import express from 'express';
import routes from '#routes/utils/routes.js';

import { Article, createArticleSchema, updateArticleSchema } from '#models/content/article.js';
import apiController from '#controllers/utils/api.controllers.js';

const router = express.Router();

routes.api(
  router, 
  'articles', 
  { 
    create:createArticleSchema, 
    update:updateArticleSchema
  }, 
  {
    get:(item, callback) => apiController.getItem({table:'Articles', model:Article, item:item}, callback),
    post:(item, callback) => apiController.createItem({table:'Articles', model:Article, item:item}, callback),
    patch:(item, callback) => apiController.editItem({table:'Articles', model:Article, item:item}, callback),
    delete:(item, callback) => apiController.deleteItem({table:'Articles', item:item}, callback)
  }
)

export default router;