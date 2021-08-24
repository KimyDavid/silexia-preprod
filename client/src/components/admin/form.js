import React, {useState} from 'react'
import Constants from '../../constants/Config';
import Validation from '../forms/validation'
import Alert from '../alerts'

const FormElement = ({url, fields, method = 'POST'}) => {
  const [data, updatedData] = useState(null)
  const [message, setMessage] = useState(null)

  const sendCreationRequest = (e) => {
    const formData = e;
    fetch(`${Constants.api_url}/${url}`, {
        method: method,
        body: JSON.stringify(formData),
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => res.json())
        .then(result => {
          if (result.error) {
            setMessage(result.details)
          } else {
            console.log(result);
            // TODO REDIRECTION TO LIST
          }
        })
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
