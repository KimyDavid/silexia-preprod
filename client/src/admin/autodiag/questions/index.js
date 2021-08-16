import React from 'react'
import {Switch, Route} from 'react-router-dom'

import ListCustom from './list'
import New from '../../../components/admin/new'
import Update from '../../../components/admin/update'

const AutodiagCategories = () => {
    const slug = 'autodiag/questions';

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