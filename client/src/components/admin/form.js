import React, {useState} from 'react';
import { API_POST } from '../../functions/apiRequest';
import Validation from '../forms/validation';
import Alert from '../alerts';

const FormElement = ({url, fields, method = 'POST', isFormData = false}) => {
  const [message, setMessage] = useState(null)

  const sendCreationRequest = (e) => {
    let data = e;
    let formData = new FormData();

    if (isFormData) {
      for ( let key in data ) {
        if (data[key][0] instanceof Blob) {
          formData.append(key, data[key][0]);
        } else {
          formData.append(key, data[key]);
        }
      }
      data = formData;
    }
    API_POST(url, method, data, isFormData).then(response => {
      if (response && response.error) {
        setMessage(response.details)
      } else {
        window.history.back();
      }
    });
  }

  return (
    <>
      <div className="flex flex-col">
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
        <Validation items={fields} onSubmit={sendCreationRequest} />
      </div>
    </>
  )
}

export default FormElement
