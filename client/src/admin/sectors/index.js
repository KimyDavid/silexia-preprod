import React from 'react'
import ElementRoutes from '../../components/admin/create_routes'

const Sectors = () => {
    const slug = 'sectors';

    const listFields = [
      {
        name: 'Id',
        key: 'id'
      },
      {
        name: 'Label',
        key: 'label'
      },
    ]

    const formFields = [
      {
        label: 'Nom',
        error: {required: 'Merci d\'écrire un nom'},
        name: 'label',
        type: 'text',
        placeholder: 'Entrer un nom'
      },
    ]

    return (
      <ElementRoutes slug={slug} formFields={formFields} listFields={listFields} />
    )
  }

export default Sectors