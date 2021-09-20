import React from 'react'
import {Switch, Route} from 'react-router-dom'

import ListCustom from './list'
import List from '../../components/admin/list'
import New from '../../components/admin/new'
import NewCustom from './new'
import Update from './update'

const Partners = () => {
    const slug = 'partners';
    const slug2 = 'partners_type';

    const partnersType = [
      {
        name: 'Nom',
        key: 'name'
      },
    ]

    const partnersTypeFields = [
      {
        name: 'Nom',
        key: 'label'
      },
    ]

    const partnersForm = [
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
        type: 'wysiwyg',
        placeholder: 'Entrer un contenu'
      },
      {
        label: 'Image',
        error: {required: 'Merci d\'ajouter une image'},
        name: 'image',
        type: 'file',
        placeholder: 'Ajouter une image'
      },
      {
        label: 'Url',
        error: {required: 'Merci d\'écrire une url'},
        name: 'url',
        type: 'text',
        placeholder: 'Entrer une url'
      },
      {
        label: 'Ordre',
        error: {required: 'Merci d\'écrire un ordre'},
        name: 'order',
        type: 'number',
        placeholder: 'Entrer un ordre'
      },
    ]

    const partnersTypeForm = [
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
          <Route path={`/admin/${slug2}/update/:id`} component={() => <Update slug={slug2} fields={partnersTypeForm} />} />
          <Route path={`/admin/${slug2}/new`} component={() => <New slug={slug2} fields={partnersTypeForm} />} />

          <Route path={`/admin/${slug}/update/:id`} component={() => <Update slug={slug} fields={partnersForm} />} />
          <Route path={`/admin/${slug}/new`} component={() => <NewCustom slug={slug} fields={partnersForm} />} />

          <Route path={`/admin/${slug2}`} component={() => <List slug={slug2} fields={partnersTypeFields} />} />
          <Route path={`/admin/${slug}`} component={() => <ListCustom slug={slug} fields={partnersType} />} />
        </Switch>
        
      </>
    )
  }

export default Partners