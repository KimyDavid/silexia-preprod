function auth(type) {
  return function(req, res, next) {
    if (!req.user || (type && type.admin && !req.user.admin)){
      res.status(401).json({error:'Unauthorized'})
    }else{
      next();
    }
  }
}

export default auth
