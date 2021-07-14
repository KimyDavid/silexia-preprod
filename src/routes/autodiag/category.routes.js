import express from 'express';
import routes from '#routes/utils/routes.js';

import { Category, createCategorySchema, updateCategorySchema } from '#models/autodiag/category.js';
import apiController from '#controllers/utils/api.controllers.js';
import categoriesController from '#controllers/autodiag/categories.controllers.js';

const router = express.Router();

routes.api(
  router, 
  'autodiag/categories', 
  { 
    create:createCategorySchema, 
    update:updateCategorySchema
  }, 
  {
    get:(item, callback) => categoriesController.getCategories({}, callback),
    post:(item, callback) => categoriesController.createCategory(item, callback),
    put:(item, callback) => categoriesController.updateCategory(item, callback),
    delete:(item, callback) => categoriesController.deleteCategory(item, callback)
  }
)

export default router;