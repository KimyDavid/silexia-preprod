import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ElementRoutes from '../../components/admin/create_routes'

const Types = () => {
    const slug = 'types';

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

export default Types