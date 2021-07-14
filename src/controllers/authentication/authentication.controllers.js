import adminController from '#controllers/authentication/admin.controllers.js';
import userController from '#controllers/authentication/user.controllers.js';

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