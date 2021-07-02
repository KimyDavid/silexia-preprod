import passport from 'passport';
import bcrypt from 'bcrypt';
import { Strategy as LocalStrategy} from 'passport-local';

import { Admin } from '../models/admin.js';
import { User } from '../models/user.js';

import authController from '../controllers/auth.controllers.js';

passport.use('local', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done) {
    authController.getUserFromEmail({"email":username}, function (err, results) {
        console.log(password, results.password)
      if(!results){
        return done('Unregistered user');
      }else{
        if(!bcrypt.compareSync(password, results.password)) {
            return done('Invalid password');
        }else{
            return done(null, new User(results));
        }
      }
    });
  }
))

passport.use('local-admin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done) {
    authController.getAdminFromEmail({"email":username}, function (err, results) {
        console.log(password, results.password)
      if(!results){
        return done('Unregistered user');
      }else{
        if(!bcrypt.compareSync(password, results.password)) {
            return done('Invalid password');
        }else{
            return done(null, new Admin(results));
        }
      }
    });
  }
))

passport.serializeUser(function(user, done) {
    console.log("serializeUser", user)
  done(null, {id:user.id, admin:user.admin});
});

passport.deserializeUser(function(data, done) {
    console.log("deserializeUser", data)
	authController.getFromId(data, function(err, results){
		if(err){
		    console.log(err)
		  done("User not foud")
		}else{
		    console.log("deserializeUser res", results)
		  done(null, results)
		}
	})
});

export default passport