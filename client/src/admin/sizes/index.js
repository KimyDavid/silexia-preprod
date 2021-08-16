import React from 'react'
import ElementRoutes from '../../components/admin/create_routes'

const Sizes = () => {
    const slug = 'sizes';

    const listFields = [
      {
        name: 'Nom',
        key: 'label'
      },
      {
        name: 'Ordre',
        key: 'order'
      },
    ]

    const formFields = [
      {
        label: 'Label',
        error: {required: 'Merci d\'écrire un nom'},
        name: 'label',
        type: 'text',
        placeholder: 'Entrer un nom'
      },
      {
        label: 'Order',
        error: {required: 'Merci d\'écrire un ordre'},
        name: 'order',
        type: 'number',
        placeholder: 'Entrer un ordre'
      },
    ]

    return (
       <ElementRoutes slug={slug} formFields={formFields} listFields={listFields} />
    )
  }

export default Sizes