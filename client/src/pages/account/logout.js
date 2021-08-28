import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const Index = ({ setToken }) => {
  useEffect(() => {
    setToken(null);
  });

  return (
    <>
      <Redirect to="/profile" />
    </>
  )
}

export default Index
