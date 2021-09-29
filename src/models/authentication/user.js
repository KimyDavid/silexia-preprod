import * as yup from 'yup';
import bcrypt from 'bcrypt';
import yup_test from '#models/utils/yup_test.js';

import userController from '#controllers/authentication/user.controllers.js';
import apiController from '#controllers/utils/api.controllers.js';


yup_test.test({yup:yup, label:'exists', type:'number', _function:apiController.getItem, key:'id'})
yup_test.test({yup:yup, label:'unique', type:'string', _function:userController.getUserFromEmail, message:'Email already registered', key:'email', reverse:true})
yup_test.test({yup:yup, label:'registered', type:'string', _function:userController.getUserFromEmail, message:'Unknown email', key:'email'})

function User(data) {
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
    key: yup.string().required(),
    password:yup.string().required().transform(function (value) {
      return bcrypt.hashSync(value, 10);
    })
})


export { 
    User, userLoginSchema, userCreateSchema, userForgetPasswordSchema, userUpdateSchema
}