import express from 'express';

import validateResourceMW from '../middleware/validateObject.middleware.js';
import auth from '../middleware/auth.middleware.js';

import { listSchema } from '../models/list.js';
import listController from '../controllers/list.controllers.js';

const router = express.Router();

setRouterList(router, 'sizes')
setRouterList(router, 'types')
setRouterList(router, 'sectors')


function setRouterList(router, table){
  router.route('/' + table)
  .get(function(req, res) {
    listController.getList({table:table}, function(err, results){
      res.status(200).json(results)
    })
  })
  .post(auth({admin:true}), validateResourceMW(listSchema), function(req, res) {
    listController.createList({table:table, item:req.body}, function(err, results){
      res.status(201).json(results)
    })
  })

router.route('/' + table + '/:id')
  .put(auth({admin:true}), validateResourceMW(listSchema), function(req, res) {
    listController.updateList({table:table, item:req.body}, function(err, results){
      res.status(201).json(results)
    })
  })
  .delete(auth({admin:true}), function(req, res) {
    listController.deleteList({table:table, id:req.params}, function(err, results){
      res.status(201).json(results)
    })
  })
}

export default router;