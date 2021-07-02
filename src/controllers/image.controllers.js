import cloudinary from 'cloudinary';

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

  let _data = {public_id:data.name}
   if(data.resource_type){
    _data.resource_type = data.resource_type
  }

 // data.image = data.image.replace(/(\r\n|\n|\r)/gm,"")
  cloudinary.v2.uploader.upload(data.image, _data, function(error, result) {
    if(error){
      console.log(error)
    }
    callback(null, result.version)
    
  })
}

export default { 
  getImage,
  uploadImage 
}

