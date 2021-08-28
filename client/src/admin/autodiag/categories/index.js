import React from 'react'
import ElementRoutes from '../../../components/admin/create_routes'

const AutodiagCategories = () => {
    const slug = 'autodiag/categories';

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
      {
        label: 'Description',
        error: {required: 'Merci d\'ajouter une description'},
        name: 'description',
        type: 'textarea',
        placeholder: 'Ajouter votre description'
      },
      {
        label: 'Order',
        error: {required: 'Merci d\'ajouter un ordre'},
        name: 'order',
        type: 'number',
        placeholder: 'Ajouter un ordre'
      },
      {
        label: 'Niveaux',
        name: 'tiers',
        type: 'collection',
        dataCollection: {
          fields: ['text', 'order']
        }
      }
    ]

    return (
      <>
        <ElementRoutes slug={slug} formFields={formFields} listFields={listFields} updateMethod="PUT"/>
      </>
    )
  }

export default AutodiagCategories