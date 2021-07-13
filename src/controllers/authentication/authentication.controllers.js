import db from '#config/db.js';
import async from 'async';
import mysql from 'mysql';
import { v4 as uuidv4 } from 'uuid';

import adminController from '#controllers/authentication/admin.controllers.js';
import userController from '#controllers/authentication/user.controllers.js';

import { parseJSON, castData } from '#utils/functions.js';


function getFromId(data, callback) {

  if(data.admin){
    adminController.getAdminFromId(data, callback)
  }else{
    userController.getUserFromId(data, callback)
  }

}


export default { 
  getFromId
}