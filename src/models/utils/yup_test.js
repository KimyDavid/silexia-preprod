import util from 'util';


function test(data){

  let _function = util.promisify(data._function);

  data.yup.addMethod(data.yup[data.type], data.label, function (propertyName, message) {
    return this.test(data.label, data.message ? data.message : message, function (value) {
      let payload = {table:propertyName}
      payload[data.key] = value
      return _function(payload)
              .then((results) => {
                  if(!results || results.length === 0){
                      return data.reverse ? true : false
                  }else{
                      return data.reverse ? false : true
                  }
              })
              .catch(() => {
                  return false
              })
    });
  });
}

function exists(yup, type, _function){

  _function = util.promisify(_function);

  yup.addMethod(yup.number, 'exists', function (propertyName, message) {
    return this.test('exists', message, function (value) {
      return _function({table:type.table, model:type.model, id:value})
              .then((results) => {
                  if(!results || results.length === 0){
                      return false
                  }else{
                      return true
                  }
              })
              .catch(() => {
                  return false
              })
    });
  });
}

const FILE_SIZE = 999999999 * 1024;
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png"
];

function image(yup, required){
  if(required){
    return  yup
            .mixed()
            .required("An image is required")
            .test(
              "fileSize",
              "File too large test",
              value => true
            )
            .test(
              "fileFormat",
              "Unsupported Format test",
              value => true
            )


  }else{
    return  yup
            .mixed()
            .test(
              "fileSize",
              "File too large",
              value => true
            )
            .test(
              "fileFormat",
              "Unsupported Format",
              value => true
            )
  }

}

export default { 
    test,
    exists,
    image
}
