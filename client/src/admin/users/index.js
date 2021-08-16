import React from 'react'
import ElementRoutes from '../../components/admin/create_routes'

const Users = () => {
    const slug = 'users';

    const listFields = [
      {
        name: 'Nom',
        key: 'name'
      },
    ]

    const formFields = []

    return (
      <ElementRoutes slug={slug} formFields={formFields} listFields={listFields} />
    )
  }

export default Users