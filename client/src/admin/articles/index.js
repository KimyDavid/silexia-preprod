import React from 'react'
import ElementRoutes from '../../components/admin/create_routes'

const Articles = () => {
    const slug = 'articles';

    const listFields = [
      {
        name: 'Titre',
        key: 'title'
      },
      {
        name: 'Texte',
        key: 'text'
      },
    ]

    const formFields = [
      {
        label: 'Titre',
        error: {required: 'Merci d\'ajouter un titre'},
        name: 'title',
        type: 'text',
        placeholder: 'Ajouter un titre'
      },
      {
        label: 'Texte',
        error: {required: 'Merci d\'ajouter un contenu'},
        name: 'text',
        type: 'textarea',
        placeholder: 'Ajouter votre contenu'
      },
      {
        label: 'Image',
        error: {required: 'Merci d\'ajouter une image'},
        name: 'image',
        type: 'file',
        placeholder: 'Illustration article'
      }
    ]

    return (
      <ElementRoutes slug={slug} formFields={formFields} listFields={listFields} />
    )
  }

export default Articles