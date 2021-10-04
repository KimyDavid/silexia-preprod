import passport from 'passport';
import bcrypt from 'bcrypt';
import { Strategy as LocalStrategy} from 'passport-local';

import { Admin } from '#models/authentication/admin.js';
import { User } from '#models/authentication/user.js';

import authController from '#controllers/authentication/authentication.controllers.js';
import userController from '#controllers/authentication/user.controllers.js';
import adminController from '#controllers/authentication/admin.controllers.js';

passport.use('local', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done) {
    userController.getUserFromEmail({"email":username}, function (err, results) {
      if(!results){
        return done('Unregistered user');
      }else{
        if(results.verif !== 2){
          return done('Merci de confirmer votre compte par email');
        }

        if(!bcrypt.compareSync(password, results.password)) {
            return done('Invalid password');
        }

        return done(null, new User(results));
      }
    });
  }
))

passport.use('local-admin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done) {
    adminController.getAdminFromEmail({"email":username}, function (err, results) {
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
  done(null, {id:user.id, admin:user.admin});
});

passport.deserializeUser(function(data, done) {
	authController.getFromId(data, function(err, results){
    if(err){
      done("User not foud")
    }else{
      done(null, results)
    }
	})
});

export default passport