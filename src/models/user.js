import * as yup from 'yup';
import util from 'util';
import bcrypt from 'bcrypt';
import { parseJSON } from '../utils/functions.js';

import listController from '../controllers/list.controllers.js';
import authController from '../controllers/auth.controllers.js';

const asyncExists = util.promisify(listController.getList);

yup.addMethod(yup.number, 'exists', function (propertyName, message) {
  return this.test('exists', message, function (value) {
    return asyncExists({table:propertyName, id:value})
            .then((results) => {
                if(!results || results.length === 0){
                    return false
                }else{
                    return true
                }
            })
            .catch((error) => {
                return false
            })
  });
});

const asyncUnique = util.promisify(authController.getUserFromEmail);

yup.addMethod(yup.string, 'unique', function (propertyName, message) {
  return this.test('unique', 'Email already registered', function (value) {
    return asyncUnique({email:value})
            .then((results) => {
                if(results){
                    return false
                }else{
                    return true
                }
            })
            .catch((error) => {
                return false
            })
  });
});

const asyncRegistered = util.promisify(authController.getUserFromEmail);

yup.addMethod(yup.string, 'registered', function (propertyName, message) {
  return this.test('registered', message, function (value) {
    return asyncRegistered({email:value})
            .then((results) => {
                if(!results){
                    return false
                }else{
                    return true
                }
            })
            .catch((error) => {
                return false
            })
  });
});

function User(data, extraData) {
    this.id                 = data.id;
    this.company            = data.company
    this.email              = data.email
    this.sector             = data.sector
    this.type               = data.type
    this.size               = data.size
    this.first_name         = data.first_name
    this.last_name          = data.last_name
    this.function           = data.function
    this.phone              = data.phone
    this.verif              = data.verif
}

const userLoginSchema = yup.object({
    email: yup.string().email().required().registered(),
    password:yup.string().required()
})

const userCreateSchema = yup.object({
    company: yup.string(100).required(),
    email: yup.string().email().required().unique(),
    password:yup.string().required().transform(function (value) {
      return bcrypt.hashSync(value, 10);
    }),
    sector: yup.number().required().exists('Sectors'),
    size:yup.number().exists('Sizes'),
    type:yup.number().exists('Types'),
    first_name:yup.string().required(),
    last_name:yup.string().required(),
    function:yup.string().required(),
    phone:yup.string()
})

const userForgetPasswordSchema = yup.object({
    email: yup.string().email().required().registered()
})

const userUpdateSchema = yup.object({
    id:yup.number().required().exists('User'),
    password:yup.string().required().transform(function (value) {
      return bcrypt.hashSync(value, 10);
    })
})


export { 
    User, userLoginSchema, userCreateSchema, userForgetPasswordSchema, userUpdateSchema
}