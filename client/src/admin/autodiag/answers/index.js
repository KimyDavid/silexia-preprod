import React from 'react'
import ElementRoutes from '../../../components/admin/create_routes'

const AutodiagCategories = () => {
    const slug = 'autodiag/answers';

    const listFields = [
      {
        name: 'Nom',
        key: 'label'
      },
    ]

    const formFields = [
      {
        label: 'Nom',
        error: {required: 'Merci d\'ajouter un nom'},
        name: 'label',
        type: 'text',
        placeholder: 'Ajouter un nom'
      },
    ]

    return (
      <>
        <ElementRoutes slug={slug} formFields={formFields} listFields={listFields} />
      </>
    )
  }

export default AutodiagCategories