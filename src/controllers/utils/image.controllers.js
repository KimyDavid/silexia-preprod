import cloudinary from 'cloudinary';
import fs from 'fs-extra';

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key:process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_API_SECRET,
  secure:true 
});


function getImage(data, version){
  var url = cloudinary.v2.url(data, {version:version, quality:"auto"})
  return url
}


function uploadImage(data, callback){

  if(!data.image){
    callback(null, null)
    return
  }

  let _data = {public_id:data.name}
   if(data.resource_type){
    _data.resource_type = data.resource_type
  }

  cloudinary.v2.uploader.upload(data.image, _data, function(error, result) {
    if(error){
      console.log(error)
    }
    callback(null, result.version)
    fs.remove(data.image, function(err){
      console.log(err)
    })
    
  })
}

export default { 
  getImage,
  uploadImage 
}

