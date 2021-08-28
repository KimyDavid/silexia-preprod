import React from 'react'
import {Switch, Route} from 'react-router-dom'

import List from './list'
import Update from './update'

const Pages = () => {
    const slug = 'administrative';

    const pages = [
      {
          name: 'Conditions générales de vente',
          slug: 'cgv'
      },
      {
          name: 'Mentions légales',
          slug: 'legal_mentions'
      },
      {
          name: 'Conditions générales d\'utilisation',
          slug: 'cgu'
      },
      {
          name: 'Politique de confidentialité',
          slug: 'privacy_policy'
      },
  ];

    const formFields = [
      {
        label: 'Texte',
        error: {required: 'Merci d\'ajouter un contenu'},
        name: 'text',
        type: 'wysiwyg',
        placeholder: 'Ajouter votre contenu'
      },
    ]

    return (
      <>
        <Switch>
          <Route path={`/admin/pages/update/:type`} component={() => <Update slug={slug} fields={formFields} />} />
          <Route path={`/admin/pages`} component={() => <List slug={slug} fields={pages} />} />
        </Switch>
      </>
    )
  }

export default Pages