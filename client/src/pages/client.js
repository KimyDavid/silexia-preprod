import React, { useEffect } from 'react';
import Herosection from '../widgets/client/herosection';
import Features from '../widgets/client/features';
import Faq from '../widgets/client/faq';

const Client = ({content}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <Herosection header={content.header} />

            <section className="mt-10 pt-5 position-relative">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div>
                                <h2 className="h3 text-primary font-w-5 mb-0">COMMENT SILEXIA</h2>
                                <h2 className="h2 font-w-5">{content.how.title}</h2>
                                <p className="lead mb-0">{content.how.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0 pb-0">
                <div className="container">
                    <Features bgshadow="bg-white shadow" list={content.how.list}/>
                </div>
            </section>

            
            <section id="banner" className="custom-pb-2 custom-pt-1 bg-primary position-relative">
                <div className="shape-1" style={{height: '150px', overflow: 'hidden'}}>
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                        <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                    </svg>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-4">
                            <h2 className="h3 text-white font-w-5 text-uppercase">{content.banner.title}</h2>
                        </div>
                        <div className="col-12 col-md-8">
                            <p className="lead lead-small mb-0 text-light columns-2">{content.banner.description}</p>
                        </div>
                    </div>
                </div>
                <div className="shape-1 bottom" style={{ height: '200px', overflow: 'hidden' }}>
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                        <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
                    </svg>
                </div>
            </section>
            
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12 col-md-12 col-lg-10 mb-0">
                            <div className="mb-4 mb-lg-8">
                                <h2 className="mt-3 font-w-6 h3 text-primary">Nos réponses à vos questions</h2>
                                <p className="lead mb-0">N'hésitez pas à nous contacter pour toutes informations complémentaires</p>
                            </div>
                            <Faq questions={content.faq} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Client;