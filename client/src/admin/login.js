import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../layout/admin/centered'
import CenteredForm from '../layout/admin/centered-form'
import Login from '../components/sample-forms/login'

const Index = () => {
  return (
    <Layout>
      <CenteredForm
        title="Login"
        subtitle="Please enter your username and password to login">
        <Login />
        <div className="w-full mt-2">
          <span>
            <Link className="link" to="/forgot-password">
              Forgot password?
            </Link>
          </span>
        </div>
      </CenteredForm>
    </Layout>
  )
}

export default Index
