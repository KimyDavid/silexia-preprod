import React from 'react'
import {Switch, Route} from 'react-router-dom'

import ListCustom from './list'
import List from '../../components/admin/list'
import New from '../../components/admin/new'
import Update from '../../components/admin/update'

const Partners = () => {
    const slug = 'partners';
    const slug2 = 'partners_type';

    const listFields = [
      {
        name: 'Nom',
        key: 'name'
      },
      {
        name: 'Extrait',
        key: 'abstract'
      },
    ]

    const listFieldsTypes = [
      {
        name: 'Nom',
        key: 'label'
      },
    ]

    const formFields = [
      {
        label: 'Nom',
        error: {required: 'Merci d\'écrire un nom'},
        name: 'name',
        type: 'text',
        placeholder: 'Entrer un nom'
      },
      {
        label: 'Extrait',
        error: {required: 'Merci d\'écrire un extrait'},
        name: 'abstract',
        type: 'textarea',
        placeholder: 'Entrer un extrait'
      },
      {
        label: 'Contenu',
        error: {required: 'Merci d\'écrire un contenu'},
        name: 'text',
        type: 'textarea',
        placeholder: 'Entrer un contenu'
      },
      {
        label: 'Ordre',
        error: {required: 'Merci d\'écrire un ordre'},
        name: 'order',
        type: 'number',
        placeholder: 'Entrer un ordre'
      },
    ]

    const formFieldsTypes = [
      {
        label: 'Nom',
        error: {required: 'Merci d\'écrire un nom'},
        name: 'label',
        type: 'text',
        placeholder: 'Entrer un nom'
      },
      {
        label: 'Ordre',
        error: {required: 'Merci d\'ajouter un ordre'},
        name: 'order',
        type: 'number',
        placeholder: 'Ajouter un ordre'
      },
    ]

    return (
      <>
        <Switch>
          <Route path={`/admin/${slug2}/update/:id`} component={() => <Update slug={slug2} fields={formFieldsTypes} />} />
          <Route path={`/admin/${slug2}/new`} component={() => <New slug={slug2} fields={formFieldsTypes} />} />

          <Route path={`/admin/${slug}/update/:id`} component={() => <Update slug={slug} fields={formFields} />} />
          <Route path={`/admin/${slug}/new`} component={() => <New slug={slug} fields={formFields} />} />

          <Route path={`/admin/${slug2}`} component={() => <List slug={slug2} fields={listFieldsTypes} />} />
          <Route path={`/admin/${slug}`} component={() => <ListCustom slug={slug} fields={listFields} />} />
        </Switch>
        
      </>
    )
  }

export default Partners