import React from 'react'
import ElementRoutes from '../../components/admin/create_routes'

const Offres = () => {
    const slug = 'offres';

    const listFields = [
      {
        name: 'Titre',
        key: 'title'
      },
      {
        name: 'Texte',
        key: 'text'
      },
      {
        name: 'Résumé',
        key: 'abstract'
      },
      {
        name: 'Ordre',
        key: 'order'
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
        placeholder: 'Illustration offre'
      },
      {
        label: 'Résumé',
        error: {required: 'Merci d\'ajouter un résumé'},
        name: 'abstract',
        type: 'textarea',
        placeholder: 'Illustration offre'
      },
      {
        label: 'Ordre',
        error: {required: 'Merci d\'ajouter un ordre'},
        name: 'order',
        type: 'number',
        placeholder: 'Ajouter un ordre'
      }
    ]

    return (
      <>
        <ElementRoutes slug={slug} formFields={formFields} listFields={listFields} />
      </>
    )
  }

export default Offres