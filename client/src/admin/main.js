import React, { useEffect, useState } from 'react'
import { API_AUTH } from '../functions/apiRequest';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import useToken from '../functions/useTokenAdmin';

import Layouts from '../layout/admin'
import Dashboard from './dashboard'
import Logout from './logout'

import Pages from './pages'
import Articles from './articles'
import Offers from './offers'
import Partners from './partners'
import Sectors from './sectors'
import Sizes from './sizes'
// import Types from './types'
import Login from './login'
import AutodiagCategories from './autodiag/categories'
import AutodiagQuestions from './autodiag/questions'
import AutodiagTiers from './autodiag/globalTiers'
import Users from './users'

const Wrapper = ({children}) => {
    return <Layouts>{children}</Layouts>
}

const Main = () => {
    const { token, setToken } = useToken();

    useEffect(() => {
        API_AUTH().then(result => {
            if (result && result.admin) {
                setToken(result)
            } else {
                setToken();
            }
        });
    }, []);
  
    if(!token) {
      return <Login setToken={setToken} />
    } else {
        return (
            <Router>
                <Wrapper>
                    <Pages />
                    <Articles />
                    <Offers />
                    <Partners />
                    <Sectors />
                    <Sizes />
                    {/* <Types /> */}
                    <AutodiagCategories />
                    <AutodiagQuestions />
                    <AutodiagTiers />
                    <Users />
                    <Route exact path="/admin" component={Dashboard} />
                    <Route exact path="/admin/logout" component={() => <Logout setToken={setToken}/> } />
                </Wrapper>
            </Router>
        );
    }
}

export default Main;