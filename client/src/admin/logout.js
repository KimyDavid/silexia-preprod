import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Layout from '../layout/admin/centered'

const Index = ({ setToken }) => {
  useEffect(() => {
    setToken(null);
  });

  return (
    <Layout>
      <Redirect to="/admin" />
    </Layout>
  )
}

export default Index
