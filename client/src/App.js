import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { API_GET } from './functions/apiRequest';

import Admin from './admin/main';
import Main from './pages/main';

import Loader from './components/loader';
import FirstLoader from './components/first-loader';

import Home2 from './pages/home2';
import PageNotFound from './pages/utilities/404';
import Associations from './page_content/Associations';
import Avocats from './page_content/Avocats';

const App = () => {
    const websiteInProgress = false;
    const [token, setToken] = useState(null);
    const [showAutodiag, setShowAutodiag] = useState(false);

    // lazyload component
    const Maintenance = lazy(() => import('./pages/utilities/maintenance'));
    const ComingSoon = lazy(() => import('./pages/utilities/comingsoon'));
    const Home = lazy(() => import('./pages/home'));
    const Offers = lazy(() => import('./pages/offers'));
    const Offer = lazy(() => import('./pages/offer'));
    const AboutUs = lazy(() => import('./pages/about-us'));
    const partners = lazy(() => import('./pages/partners'));
    const LegalGenerator = lazy(() => import('./pages/legal-generator'));
    const BlogList = lazy(() => import('./pages/blog/bloglist'));
    const BlogSingle = lazy(() => import('./pages/blog/blogsingle'));
    const Login = lazy(() => import('./pages/account/login'));
    const ForgotPassword = lazy(() => import('./pages/account/forgot-password'));
    const ResetPassword = lazy(() => import('./pages/account/reset-password'));
    const VerifAccount = lazy(() => import('./pages/account/verif-account'));
    const ProfileEdit = lazy(() => import('./pages/account/edit'));
    const ProfileLogout = lazy(() => import('./pages/account/logout'));
    const Profile = lazy(() => import('./pages/account/profile'));
    const AutodiagResult = lazy(() => import('./pages/account/result'));
    const Page = lazy(() => import('./pages/legals/page'));
    const Client = lazy(() => import('./pages/client'));

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

    const [loaderFinished, setLoaderFinished] = useState(false);
    setTimeout(() => {
        setLoaderFinished(true);
    }, 1600);

  return (
    <div>
        <BrowserRouter>
            <Switch>
                <Route path="/admin" component={Admin} />

                { websiteInProgress ?
                    <Switch>
                        <Route path="/coming-soon" component={ComingSoon} />
                        <Route path="/" component={Maintenance} />
                    </Switch>
                : 
                <>  
                    { window.location.pathname === '/' ? 
                        <FirstLoader />
                    : 
                        <div id="loader-wrapper" className={`loader-wrapper ${ loaderFinished ? 'finished' : '' }`}>
                            <svg className="loader loader--global" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 403.8 403.8">
                                <clipPath id="clip_1">
                                    <path d="M200.9,93.5v47.3l-40.7,75.6L255,316c44.1-20.9,72.6-65.7,72.6-114.6c0-69.9-56.8-126.7-126.7-126.7v-27
                                        c84.8,0,153.8,69,153.8,153.8c0,69.9-40.5,120.2-103,145.3c-0.7,0.3-1.4,0.5-2.1,0.5c-1.5,0-2.8-0.6-3.7-1.6L129.5,223.5
                                        c-0.9-1-1.4-2.2-1.4-3.5c0-1,0.3-1.9,0.8-2.7l67.4-124.9c0.8-1.7,2.6-2.8,4.5-2.8L200.9,93.5z"/>
                                </clipPath>
                                <clipPath id="clip_2">
                                    <path d="M200.9,93.5v47.3l40.7,75.6L146.7,316c-44.1-20.9-72.6-65.7-72.6-114.6c0-69.9,56.8-126.7,126.7-126.7v-27
                                        c-84.8,0-153.8,69-153.8,153.8c0,69.9,40.5,120.2,103,145.3c0.7,0.3,1.4,0.5,2.1,0.5c1.5,0,2.8-0.6,3.7-1.6l116.3-121.9
                                        c0.9-1,1.4-2.2,1.4-3.5c0-1-0.3-1.9-0.8-2.7L205.4,92.4c-0.8-1.7-2.6-2.8-4.5-2.8L200.9,93.5z"/>
                                </clipPath>
                                <g clip-path="url(#clip_1)">
                                    <path style={{stroke: "#DF423C"}} className="line-red" d="m174.7 50.6c0 0 141.2-7.5 164.3 122.4 20 112.5-87 160-87 160l-106-114 67.6-123.9" />
                                </g>
                                <g clip-path="url(#clip_2)">
                                    <path style={{stroke: "#203158"}} className="line-blue" d="m194.6 95.6l62.4 124.4-107 112.5c0 0-96.2-28.7-89-135.5 10.5-156.3 169.2-145 169.2-145" />
                                </g>
                            </svg>
                        </div>
                    }
                    <Suspense fallback={<Loader  />}>
                        <Main token={token} showAutodiag={showAutodiag} setShowAutodiag={setShowAutodiag}>
                            <Switch>
                                <Route exact path="/" component={() => <Home2 setShowAutodiag={setShowAutodiag}/>} />
                                <Route path="/diagnostic" component={() => <Home setShowAutodiag={setShowAutodiag} token={token} />} />
                                {/* PAGES */}
                                <Route path="/success-story" component={AboutUs} />
                                <Route path="/reseau-partenaires" component={partners} />
                                <Route exact path="/generateur-mentions-legales" component={LegalGenerator} />
                                {/* CLIENTS */}
                                <Route path="/associations" component={() => <Client content={Associations[0]} title="Associations" />} />
                                <Route path="/avocats" component={() => <Client content={Avocats[0]}  title="Avocats"/>} />
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
                                {/* OFFRES */}
                                <Route exact path="/numerique" component={Offers} />
                                <Route path="/:id" component={() => <Offer />} />
                                <Route component={PageNotFound} />
                            </Switch>
                        </Main>
                    </Suspense>
                </>
                }
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;