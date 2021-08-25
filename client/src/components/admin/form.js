import React, {useState} from 'react';
import { API_POST } from '../../functions/apiRequest';
import Validation from '../forms/validation';
import Alert from '../alerts';

const FormElement = ({url, fields, method = 'POST'}) => {
  const [message, setMessage] = useState(null)

  const sendCreationRequest = (e) => {
    const formData = e;
    API_POST(url, method, formData).then(response => {
      if (response.error) {
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
