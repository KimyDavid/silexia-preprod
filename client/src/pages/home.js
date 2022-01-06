import React from 'react';
import Services from '../widgets/sections/services';
import Herosection from '../widgets/sections/herosection';
import FeatureServices from '../widgets/sections/home2/services';
import Faq from '../widgets/sections/faq';
import Blog from '../widgets/sections/blog';

const Index = ({setShowAutodiag, token}) => {

        return (
            <div>
                <section>
                    <div className="container">
                        <Herosection setShowAutodiag={setShowAutodiag} token={token} />
                    </div>
                </section>
                <div className="page-content">
                    <section className="custom-pt-1 custom-pb-2 bg-primary position-relative" data-bg-img={require(`../assets/images/bg/02.png`)}>
                        {/*services start*/}
                        <Services />
                        {/*services end*/}
                    </section>
                    {/*faq end*/}

                        {/*faq start*/}
                        <section className="position-relative bg-light pt-0">
                            <div className="container pb-10">
                                <div className="row align-items-center justify-content-between pb-10">
                                    <div className="col-12 col-lg-4 mb-8 mb-lg-0">
                                        <div className="text-center">
                                            <span className="badge badge-light-soft p-2"><i className="la la-question ic-3x rotation" /></span>
                                            <h2 className="mb-5 h3 font-w-5">Les réponses à vos questions</h2>
                                        </div>
                                        <img src={require(`../assets/images/about/04.svg`)} alt="Image" className="img-fluid" />
                                    </div>
                                    <div className="col-12 col-lg-8 text-center">
                                        <Faq setShowAutodiag={setShowAutodiag} token={token} />
                                    </div>
                                </div>
                            </div>
                                    <div className="shape-1 bottom" style={{height: '200px', overflow: 'hidden'}}>
                                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                                        <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                                        </svg>
                                    </div>
                        </section>

                    <section className="p-0">
                        <div className="container">
                            <div className="row align-items-end mb-5">
                                <div className="col-12">
                                    <div className="text-left">
                                        <span className="badge badge-primary-soft p-2"><i className="la la-clipboard-list ic-3x rotation" /></span>
                                        <h2 className="mt-4 mb-0 h3">Nos offres</h2>
                                    </div>
                                </div>
                            </div>
                            <FeatureServices />
                        </div>
                    </section>
                    
                    {/*blog start*/}
                    <section>
                        <div className="container">
                            <div className="row align-items-end mb-5">
                                <div className="col-12 col-md-12 col-lg-8">
                                    <div>
                                        <span className="badge badge-primary-soft p-2"><i className="la la-bold ic-3x rotation" /></span>
                                        <h2 className="mt-4 mb-0 h3">Notre blog dédié à la transition numérique des TPE/PME</h2>
                                    </div>
                                </div>
                            </div>
                            {/* / .row */}
                            <Blog />
                        </div>
                    </section>
                    {/*blog end*/}
                </div>
            </div>
        );
}

export default Index;