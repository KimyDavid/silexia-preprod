import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { useTranslation } from "react-i18next";

import ListCustom from './list'
import New from './new'
import Update from './update'

const AutodiagCategories = () => {
    const slug = 'autodiag/questions';
    const { t } = useTranslation('field');

    const listFields = [
      {
        name: 'Nom',
        key: 'label'
      },
    ]

    const formFields = [
      {
        label: t('name'),
        error: {required: 'Merci d\'ajouter un nom'},
        name: 'label',
        type: 'text',
        placeholder: 'Ajouter un nom'
      },
      {
        label: t('description'),
        error: {required: 'Merci d\'ajouter une description'},
        name: 'description',
        type: 'text',
        placeholder: 'Ajouter une description'
      },
      {
        label: t('order'),
        error: {required: 'Merci d\'ajouter un ordre'},
        name: 'order',
        type: 'number',
        placeholder: 'Ajouter un ordre'
      },
      {
        label: t('answers'),
        error: {required: 'Merci d\'ajouter une réponse'},
        name: 'answers',
        type: 'collection',
        dataCollection: {
          fields: ['label', 'order', 'score', 'flag']
        }
      },
    ]

    return (
      <>
        <Switch>
          <Route path={`/admin/${slug}/update/:id`} component={() => <Update slug={slug} fields={formFields} />} />
          <Route path={`/admin/${slug}/new`} component={() => <New slug={slug} fields={formFields} />} />
          <Route path={`/admin/${slug}`} component={() => <ListCustom url='autodiag' slug={slug} fields={listFields} />} />
        </Switch>
      </>
    )
  }

export default AutodiagCategories