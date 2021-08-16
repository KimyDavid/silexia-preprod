import React from 'react'
import {Switch, Route} from 'react-router-dom'

import List from './list'
import New from '../../components/admin/new'

const Pages = () => {
    const slug = 'administrative';

    const listFields = [
      {
        name: 'Page',
        key: 'type'
      },
    ]

    const formFields = [
      {
        label: 'Type',
        error: {required: 'Merci d\'ajouter un type'},
        name: 'type',
        type: 'text',
        placeholder: 'Ajouter un type'
      },
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
          <Route path={`/admin/pages/new`} component={() => <New slug={slug} fields={formFields} />} />
          <Route path={`/admin/pages`} component={() => <List slug={slug} fields={listFields} />} />
        </Switch>
      </>
    )
  }

export default Pages