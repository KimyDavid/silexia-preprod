import React from 'react'
import ElementRoutes from '../../../components/admin/create_routes'

const AutodiagCategories = () => {
    const slug = 'autodiag/tiers';

    const listFields = [
      {
        name: 'Texte',
        key: 'text'
      },
      {
        name: 'Niveau',
        key: 'order'
      },
    ]

    const formFields = [
      {
        label: 'Texte',
        error: {required: 'Merci d\'ajouter un texte'},
        name: 'text',
        type: 'text',
        placeholder: 'Ajouter un texte'
      },
      {
        label: 'Niveau',
        error: {required: 'Merci d\'ajouter un niveau'},
        name: 'order',
        type: 'number',
        placeholder: 'Ajouter un niveau'
      },
    ]

    return (
      <>
        <ElementRoutes slug={slug} formFields={formFields} listFields={listFields} updateMethod="PUT"/>
      </>
    )
  }

export default AutodiagCategories