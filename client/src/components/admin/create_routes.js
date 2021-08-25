import React from 'react'
import {Switch, Route} from 'react-router-dom'

import List from '../../components/admin/list'
import New from '../../components/admin/new'
import Update from '../../components/admin/update'

const CreateAdminRoutes = ({slug, formFields, listFields, updateMethod}) => {

  return (
    <>
      <Switch>
          <Route path={`/admin/${slug}/update/:id`} component={() => <Update slug={slug} fields={formFields} method={updateMethod} />} />
          <Route path={`/admin/${slug}/new`} component={() => <New slug={slug} fields={formFields} />} />
          <Route path={`/admin/${slug}`} component={() => <List slug={slug} fields={listFields} />} />
      </Switch>
    </>
  )
}

export default CreateAdminRoutes
