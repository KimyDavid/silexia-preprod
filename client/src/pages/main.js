import React, { Fragment , useState, useEffect, lazy } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import '../App.css';
import '../Vendor.js';

import Header from '../layout/header/header';
import HeaderConnected from '../layout/header/header_connected';
import Footer from '../layout/footer/footer';
import Scrolltop from '../layout/back-to-top';
import CookieConsent from "react-cookie-consent";

function App({token, children, setShowAutodiag, showAutodiag}) {
    useEffect(() => {
        const links = document.querySelectorAll('a[href]:not([href*="#"])');
        links.forEach(_link => {
            _link.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.body').classList.remove('loaded');
                setTimeout(() => {
                    location.href = _link.getAttribute('href');
                }, 500);
            });
        });
    }, [children]);

  return (
    <div className="body">
        <div className="page-wrapper">
            { token ? <HeaderConnected/> : <Header setShowAutodiag={setShowAutodiag} showAutodiag={showAutodiag} /> }
            { children }
            <Footer />
            <Scrolltop />
        </div>

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
    </div>
  );
}

export default App;