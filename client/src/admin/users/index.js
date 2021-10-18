import React from 'react';
import {Switch, Route} from 'react-router-dom';
import List from './list';
import Detail from './detail';

const Users = () => {
    const slug = 'admin/list_users';

    return (
      <Switch>
        <Route exact path={`/admin/users`} component={() => <List slug={slug} />} />
        <Route path={`/admin/users/:id`} component={() => <Detail />} />
      </Switch>
    )
  }

export default Users