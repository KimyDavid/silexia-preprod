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
        label: 'Image',
        error: {required: 'Merci d\'ajouter une image'},
        name: 'image',
        type: 'file',
        placeholder: 'Ajouter une image'
      },
      {
        label: 'Tiers',
        error: {required: 'Merci d\'ajouter des tiers'},
        name: 'tiers',
        type: 'select',
        placeholder: 'Ajouter des tiers',
        options: [
          {value: [], label: 'Selectionner des tiers'},
        ]
      }
    ]

    return (
      <>
        <ElementRoutes slug={slug} formFields={formFields} listFields={listFields} />
      </>
    )
  }

export default AutodiagCategories