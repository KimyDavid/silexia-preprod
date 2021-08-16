import React, {useState, useEffect} from 'react'
import Constants from '../../constants/Config'
import Validation from '../forms/validation'
import Alert from '../alerts'

const Login = ({setToken, message = null}) => {
  const [data, onSubmit] = useState(null)

  useEffect(() => {
    if (data) {
      fetch(`${Constants.api_url}/admin/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        },
      )
      .then(res => res.json())
      .then(
        (result) => {
          if (setToken) {
            setToken(result);
          }
        },
      )
      .catch(
        (error) => {
          console.log(error);
        }
      )
    }
  });

  let items = [
    {
      label: 'Email',
      error: {required: 'Please enter a valid email'},
      name: 'email',
      type: 'email',
      placeholder: 'Enter you email'
    },
    {
      label: 'Password',
      error: {required: 'Password is required'},
      name: 'password',
      type: 'password',
      placeholder: 'Enter your password'
    },
  ]

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
        <Validation items={items} onSubmit={onSubmit} />
      </div>
    </>
  )
}

export default Login
