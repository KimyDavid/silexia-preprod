function auth(type) {
  return function(req, res, next) {
      console.log("auth", type, req.user)
    if (!req.user || (type && type.admin && !req.user.admin)){
      res.status(401).json({errors:'Unauthorized'})
    }else{
      next();
    }
  }
}

export default auth
