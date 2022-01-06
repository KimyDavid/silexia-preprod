import React, { Fragment , useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import '../App.css';
import '../Vendor.js';

import Header from '../layout/header/header';
import HeaderConnected from '../layout/header/header_connected';
import Footer from '../layout/footer/footer';
import Scrolltop from '../layout/back-to-top';
import Home from './home';

import Home2 from './home2';
import Offers from './offers';
import Offer from './offer';
import AboutUs from './about-us';
import partners from './partners';
import LegalGenerator from './legal-generator';

import BlogList from './blog/bloglist';
import BlogSingle from './blog/blogsingle';

import Login from './account/login';
import ForgotPassword from './account/forgot-password';
import ResetPassword from './account/reset-password';
import VerifAccount from './account/verif-account';
import ProfileEdit from './account/edit';
import ProfileLogout from './account/logout';
import Profile from './account/profile';
import AutodiagResult from './account/result';

import Page from './legals/page';

import Maintenance from './utilities/maintenance';
import ComingSoon from './utilities/comingsoon';
import PageNotFound from './utilities/404';

import CookieConsent from "react-cookie-consent";
import { API_GET } from '../functions/apiRequest';

import Client from './client';
import Associations from '../page_content/Associations';
import Avocats from '../page_content/Avocats';

function App() {
  const websiteInProgress = false;
  const [token, setToken] = useState(null);
  const [showAutodiag, setShowAutodiag] = useState(false);

  useEffect(() => {
    API_GET('auth').then(result => {
      if (result) {
        if (result.verif > 0) {
          setToken(result);
        } else {
          setToken(null);
        }
      }
    });
  }, []);

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
    <>
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
              { token ? <HeaderConnected/> : <Header setShowAutodiag={setShowAutodiag} showAutodiag={showAutodiag} /> }
              <Switch>
                <Route exact path="/" component={() => <Home2 setShowAutodiag={setShowAutodiag}/>} />

                <Route path="/diagnostic" component={() => <Home setShowAutodiag={setShowAutodiag} token={token} />} />

                {/* OFFRES */}
                <Route exact path="/offres" component={Offers} />
                <Route path="/offres/:id" component={() => <Offer />} />

                {/* PAGES */}
                <Route path="/about-us" component={AboutUs} />
                <Route path="/partners" component={partners} />
                <Route path="/generateur-mentions-legales" component={LegalGenerator} />

                {/* CLIENTS */}
                <Route path="/client/associations" component={() => <Client content={Associations[0]} />} />
                <Route path="/client/avocats" component={() => <Client content={Avocats[0]} />} />
                
                {/* BLOG */}
                <Route exact path="/blog" component={BlogList} />
                <Route path="/blog/:id" component={BlogSingle} />
                
                {/* LÉGALS */}
                { staticPages.map((page, i) => 
                  <Route exact path={`/${page.url}`} component={() => <Page slug={page.slug} />} key={i} />
                )}
                
                {/* ACCOUNT */}
                { token ? 
                  <Route exact path="/profile" component={() => <AutodiagResult token={token} />} />
                :
                  <Route path="/profile" component={() => <Login setShowAutodiag={setShowAutodiag} />} />
                }
                
                  <Route path="/profile/details" component={() => <Profile token={token} />} />
                  <Route path="/profile/edit" component={() => <ProfileEdit token={token} />} />
                  <Route path="/profile/logout" component={() => <ProfileLogout />} />

                  <Route path="/verif_account" component={() => <VerifAccount />} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                  <Route path="/reset_password" component={() => <ResetPassword />} />

                  <Route component={PageNotFound} />
                </Switch>
              <Footer />
              <Scrolltop />
            </BrowserRouter>
          </div>
        }
      </Fragment>

      <CookieConsent
        location="bottom"
        buttonText="Accepter"
        declineButtonText="Refuser"
        expires={150}
        enableDeclineButton
        disableButtonStyles
        style={{ background: "white", color: "black", fontSize: "14px", boxShadow: "0px 0px 20px rgba(0,0,0,0.2)" }}
        buttonClasses="btn btn-primary btn-small m-3"
        declineButtonClasses="btn btn-secondary btn-small my-3 ml-3"
        onDecline={() => {
          window['ga-disable-UA-209674431-1'] = true;
          document.location.reload();
        }}
        onAccept={(acceptedByScrolling) => {
        }}>Ce site utilise Google Analytics. En continuant à naviguer, vous nous autorisez à déposer un cookie à des fins de mesure d'audience. Voir notre &nbsp; 
        <Link className="link" to="/politique-de-confidentialite">
        Politique de confidentialité.
        </Link>
      </CookieConsent>
    </>
  );
}

export default App;