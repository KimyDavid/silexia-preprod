import validateResourceMW from '#middleware/validateObject.middleware.js';
import auth from '#middleware/auth.middleware.js';

function api(router, route, schema, _functions){
  router.route('/' + route)
  .get(function(req, res) {
    _functions.get({}, function(err, results){
      res.status(200).json(results)
    })
  })
  .post(auth({admin:true}), validateResourceMW(schema.create), function(req, res) {
    _functions.post(req.body, function(err, results){
      res.status(201).json(results)
    })
  })

  if(_functions.put){
    router.route('/' + route + '/:id')
    .put(auth({admin:true}), validateResourceMW(schema.update), function(req, res) {
      _functions.put(req.body, function(err, results){
        res.status(200).json(results)
      })
    })
  }else if(_functions.patch){
    router.route('/' + route + '/:id')
    .patch(auth({admin:true}), validateResourceMW(schema.update), function(req, res) {
      _functions.patch(req.body, function(err, results){
        res.status(200).json(results)
      })
    })
  }

  if(_functions.delete){
    router.route('/' + route + '/:id')
    .delete(auth({admin:true}), function(req, res) {
      _functions.delete(req.params, function(err, results){
        res.status(200).json(results)
      })
    })
  }

}

export default { 
    api
}
