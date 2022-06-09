import React, { useEffect, useState } from 'react';
import PageHeading from '../widgets/Pageheading';
import { API_GET } from '../functions/apiRequest';
import { useParams } from "react-router-dom";
import Offers from '../page_content/Offers';
import OffersFlux from '../page_content/OffersFlux';
import { toSnakeCase } from '../functions/string';
import PricingPlan from '../widgets/offers/pricingplan';
import Blog from '../widgets/sections/blog';
import FeatureServices from '../widgets/sections/home2/services';

const Offer = () => {
    const [offers, setOffers] = useState();
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const offerContent = Offers[id];
    const offerFlux = OffersFlux[id];

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true)
        API_GET('offres').then(response => {
            setOffers(response);
            setLoading(false);
        });
    }, []);
    
    return (
        <div className={`${loading ? 'loading' : ''}`}>
            { offers ? 
                <>
                    {/*hero section start*/}
                    <section className="position-relative py-6">
                        <PageHeading title={offers.find(x => toSnakeCase(x.title) === id).title} />
                    </section>
                    <section className="py-0 container">
                        <div className="row">
                            <div className="col-12 col-md-10 mx-auto">
                                <div className="text-center" dangerouslySetInnerHTML={{__html: offers.find(x => toSnakeCase(x.title) === id).text}}></div>
                            </div>
                        </div>
                    </section>
                    {/*hero section end*/}
                    {/*body content start*/}
                    <div className="page-content">
                        {/*privacy start*/}
                        <section className="pt-0">
                                {/*how it work start*/}
                                <section className="position-relative bg-light mt-4" data-bg-img={require(`../assets/images/bg/02.png`)}>
                                    <div className="container mt-4 mb-4 pb-10">
                                        {/* / .row */}
                                        <div className="row">
                                            <div className="text-center mb-6 col-12 col-md-10 offset-md-1">
                                                <div>
                                                <span className="badge badge-primary-soft p-2">
                                                    <i className="la la-users ic-3x rotation" />
                                                </span>
                                                <h2 className="mt-4 font-w-5 h3">{ offerFlux.title }</h2>
                                                </div>
                                            </div>
                                        </div>
                                        { offerFlux ? offerFlux.flux.map((item, i) => 
                                            <div key={i} className="row align-items-center justify-content-between mb-3 mt-2">
                                                <div className={`col-7 col-lg-4 ${ (i%2 === 0) ? 'order-lg-1' : '' } mb-3 mb-lg-0`}>
                                                    <img src={require(`../assets/images/offers/offre_${item.image}`)} alt={`Silexia ${item.title}`} className="img-fluid steps-img" loading="lazy"/>
                                                </div>
                                                <div className="col-12 col-lg-6">
                                                    <div>
                                                        <h2><span className="badge badge-primary-soft p-2">0{ i+1 }</span></h2>
                                                        <h4 className="mt-3">{item.title}</h4>
                                                        <p className="mb-0">{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : '' }
                                    </div>
                                    <div className="shape-1" style={{height: '200px', overflow: 'hidden'}}>
                                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                                        <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                                        </svg>
                                    </div>
                                    <div className="shape-1 bottom" style={{height: '200px', overflow: 'hidden'}}>
                                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                                        <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                                        </svg>
                                    </div>
                                </section>
                                {/*how it work end*/}

                            <div className="container">
                                {offerContent ? <PricingPlan offer={offerContent} title={offers.find(x => toSnakeCase(x.title) === id).title} /> : '' }
                            </div>
                                    
                            <section className="p-0">
                                <div className="container">
                                    <div className="row align-items-end mb-5">
                                        <div className="col-12">
                                            <div className="text-left">
                                                <span className="badge badge-primary-soft p-2"><i className="la la-clipboard-list ic-3x rotation" /></span>
                                                <h2 className="mt-4 mb-0 h3">Nos autres services</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <FeatureServices />
                                </div>
                            </section>

                            <div className="container">
                                <div className="row align-items-end mb-5 mt-10">
                                    <div className="col-12 col-md-12 col-lg-8">
                                        <div>
                                            <span className="badge badge-primary-soft p-2"><i className="la la-bold ic-3x rotation" /></span>
                                            <h2 className="mt-4 mb-0 h3">Notre blog dédié à la transition numérique des TPE/PME</h2>
                                        </div>
                                    </div>
                                </div>
                                <Blog />
                            </div>
                        </section>
                        {/*privacy end*/}
                    </div>
                    {/*body content end*/}
                </>
            : '' }
        </div>

    );
}

export default Offer;