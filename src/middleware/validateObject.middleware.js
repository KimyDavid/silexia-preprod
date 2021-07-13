// from https://javascript.plainenglish.io/validate-your-node-express-js-rest-api-calls-with-yup-5c4080fdae87

/**
 * Validate that a resource being POSTed or PUT
 * has a valid shape, else return 400 Bad Request
 * @param {*} resourceSchema is a yup schema
 */
const validateResourceMW = (resourceSchema) => async (req, res, next) => {
  if(!req.body){
    res.status(400).json({errors: 'Validation error', details:"Empty body"})
  }

  const resource = req.body;
  for (var key in req.params) {
    resource[key] = req.params[key]
  }

  if(req.files && req.files.image){
    resource.image = req.files.image
  }
  
  // throws an error if not valid
  resourceSchema.validate(resource)
  .then(function(value){
    req.body = value
    next()
  })
  .catch(function(error){
    res.status(400).json({error: 'Validation error', details:error.message})
  })
};

export default validateResourceMW;