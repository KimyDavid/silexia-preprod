import React, {useState} from 'react';
import { API_POST } from '../../functions/apiRequest';
import Validation from '../forms/validation';
import Alert from '../alerts';

const FormElement = ({url, fields, method = 'POST', isFormData = false}) => {
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  
  const sendCreationRequest = (e) => {
    let data = e;
    let formData = new FormData();

    let currentValues = {};
    fields.forEach((field) => {
       const value = { [field.name] : field.value };
       Object.assign(currentValues, value);
    });

    for ( let key in data ) {
        if (data[key] === currentValues[key] || key === 'image') {
            if (data[key] === "" || data[key].length < 1) {
                delete data[key];
            }
        }

        // if (key === 'page' && data[key].length > 0) {
        //     data[key] = data[key].join();
        // }
    }

    if (isFormData) {
      for ( let key in data ) {
        if (data[key][0] instanceof Blob) {
          formData.append(key, data[key][0], data[key][0].name);
        } else {
          formData.append(key, data[key]);
        }
      }
    
      data = formData;
    }

    setLoading(true);
    API_POST(url, method, data, isFormData).then(response => {
      setLoading(false);
      if (response && response.error) {
        setMessage(response.details)
      } else {
        window.history.back();
      }
    });
  }

  return (
    <>
      <div className={`flex flex-col ${loading ? 'loading' : '' }`}>
        {message ? 
          <div className="w-full mb-4">
            <Alert
              color="bg-transparent border-red-500 text-red-500"
              borderLeft
              raised>
              {message}
            </Alert>
          </div>
        : ''}
        <Validation items={fields} onSubmit={sendCreationRequest} noEdit={(method === 'PUT' || method === 'POST')}/>
      </div>
    </>
  )
}

export default FormElement
