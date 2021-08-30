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
import Offer from './offer';
import AboutUs from './about-us';

import BlogList from './blog/bloglist';
import BlogSingle from './blog/blogsingle';

import Login from './account/login';
import ForgotPassword from './account/forgot-password';
import ResetPassword from './account/reset-password';
import ProfileEdit from './account/edit';
import ProfileLogout from './account/logout';
import Profile from './account/profile';
import AutodiagResult from './account/result';

import Page from './legals/page';

import Maintenance from './utilities/maintenance';
import ComingSoon from './utilities/comingsoon';
import PageNotFound from './utilities/404';

function App() {
  const websiteInProgress = false;
  const { token, setToken } = useToken();

  const staticPages = [
    {
      slug: 'legal_mentions',
      url: 'mentions-legales'
    },
    {
      slug: 'cgv',
      url: 'conditions-generales-de-vente'
    },
    {
      slug: 'cgu',
      url: 'conditions-generales-utilisation'
    },
    {
      slug: 'privacy_policy',
      url: 'politique-de-confidentialite'
    }];

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
              <Route exact path="/offres/:id" component={() => <Offer />} />
              <Route exact path="/offres" component={Offers} />
              <Route exact path="/about-us" component={AboutUs} />

              <Route exact path="/autodiag" component={Autodiag} />
              
              {/* BLOG */}
              <Route exact path="/blog/:id" component={BlogSingle} />
              <Route exact path="/blog" component={BlogList} />
              
              {/* LÉGALS */}
              { staticPages.map((page, i) => 
                <Route exact path={`/${page.url}`} component={() => <Page slug={page.slug} />} key={i} />
              )}
              
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