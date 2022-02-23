import React from 'react'
import {Switch, Route} from 'react-router-dom'

import List from './list';
import New from './new'
import Update from './update'

const Projects = () => {
    const slug = 'projects';

    const partnersType = [
      {
        name: 'Nom',
        key: 'name'
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
        error: {},
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
      {
        label: 'Page',
        error: {required: 'Merci d\'ajouter une page'},
        name: 'page',
        type: 'radio',
        options: [
            {
                label:'Aucune',
                value: 'none',
            },
            {
                label:'Associations',
                value: 'asso',
            },
            {
                label: 'Avocats',
                value: 'avocats',
            },
        ],
        placeholder: 'Entrer une page'
      },
    ]

    return (
      <>
        <Switch>
          <Route path={`/admin/${slug}/update/:id`} component={() => <Update slug={slug} fields={partnersForm} />} />
          <Route path={`/admin/${slug}/new`} component={() => <New slug={slug} fields={partnersForm} />} />
          <Route path={`/admin/${slug}`} component={() => <List slug={slug} fields={partnersType} />} />
        </Switch>
        
      </>
    )
  }

export default Projects