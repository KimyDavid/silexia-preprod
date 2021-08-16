import React, {useState} from 'react'
import Constants from '../../constants/Config';
import Validation from '../forms/validation'
import Alert from '../alerts'

const FormElement = ({url, fields}) => {
  const [data, updatedData] = useState(null)
  const [message, setMessage] = useState(null)

  const sendCreationRequest = (e) => {
    const formData = e;
    fetch(`${Constants.api_url}/${url}`, {
        method: 'POST',
        body: formData,
        headers: { 'Content-Type': 'application/form-data' },
      })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
  }

  return (
    <>
      <div className="flex flex-col">
        {data && message && (
          <div className="w-full mb-4">
            <Alert
              color="bg-transparent border-green-500 text-green-500"
              borderLeft
              raised>
              {message}
            </Alert>
          </div>
        )}
        <Validation items={fields} onSubmit={sendCreationRequest} />
      </div>
    </>
  )
}

export default FormElement
