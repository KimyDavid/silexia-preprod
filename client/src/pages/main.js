import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import useToken from '../functions/useTokenAccount';

import '../App.css';
import '../Vendor.js';

import Header from '../layout/header/header';
import HeaderConnected from '../layout/header/header_connected';
import Footer from '../layout/footer/footer';
import Scrolltop from '../layout/back-to-top';
import Home from './home';
import Autodiag from './autodiag';

import Home2 from './home2';
import Offers from './offers';

import BlogList from './blog/bloglist';
import BlogSingle from './blog/blogsingle';

import Login from './account/login';
import ForgotPassword from './account/forgot-password';
import ResetPassword from './account/reset-password';
import ProfileEdit from './account/edit';
import ProfileLogout from './account/logout';
import Profile from './account/profile';
import AutodiagResult from './account/result';

import CGV from './legals/cgv';
import Confidentialite from './legals/confidentialite';
import MentionsLegales from './legals/mentions-legales';

import Maintenance from './utilities/maintenance';
import ComingSoon from './utilities/comingsoon';
import PageNotFound from './utilities/404';

function App() {
  const websiteInProgress = false;
  const { token, setToken } = useToken();

  return (
    <Fragment>{
      websiteInProgress ?
        <BrowserRouter>
          <Switch>
              <Route path="/coming-soon" component={ComingSoon} />
              <Route path="/maintenance" component={Maintenance} />
          </Switch>
        </BrowserRouter>
       :
        <div className="page-wrapper">
          <BrowserRouter>
            { token ? <HeaderConnected/> : <Header /> }
            <Switch>
              <Route exact path="/" component={Home} />

              <Route exact path="/home2" component={Home2} />
              <Route exact path="/offres" component={Offers} />

              <Route exact path="/autodiag" component={Autodiag} />
              
              {/* BLOG */}
              <Route exact path="/blog/:id" component={BlogSingle} />
              <Route exact path="/blog" component={BlogList} />
              
              {/* LÉGALS */}
              <Route exact path="/mentions-legales" component={MentionsLegales} />
              <Route exact path="/politique-de-confidentialite" component={Confidentialite} />
              <Route exact path="/conditions-generales-de-vente" component={CGV} />

              {/* ACCOUNT */}
              { token ? 
                <>
                  <Route exact path="/profile/autodiag" component={AutodiagResult} />
                  <Route exact path="/profile/edit" component={ProfileEdit} />
                  <Route exact path="/profile/logout" component={() => <ProfileLogout setToken={setToken} />} />
                  <Route exact path="/profile" component={Profile} />
                </>
                :
                <>
                  <Route path="/forgot-password" component={ForgotPassword} />
                  <Route path="/reset-password" component={ResetPassword} />
                  <Route path="/profile" component={() => <Login setToken={setToken} />} />
                </>
              }

              <Route component={PageNotFound} />
            </Switch>
            <Footer />
            <Scrolltop />
          </BrowserRouter>
        </div>
      }
    </Fragment>
  );
}

export default App;