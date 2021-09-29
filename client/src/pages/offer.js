import React, { useEffect, useState } from 'react';
import OfferHeading from '../widgets/offers/heading';
import { API_GET } from '../functions/apiRequest';
import { useParams } from "react-router-dom";
import Offers from '../constants/Offers';
import OffersFlux from '../constants/OffersFlux';
import { toSnakeCase } from '../functions/string';
import PricingPlan from '../widgets/offers/pricingplan';

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
            setOffers(response)
            setLoading(false)
        });
    }, []);
    
    return (
        <div className={`${loading ? 'loading' : ''}`}>
            { offers ? 
                <>
                    {/*hero section start*/}
                    <section>
                        <div className="container">
                            <OfferHeading item={offers.find(x => toSnakeCase(x.title) === id)} />
                        </div>
                    </section>
                    {/*hero section end*/}
                    {/*body content start*/}
                    <div className="page-content">
                        {/*privacy start*/}
                        <section>
                            <div className="container">
                                <div className="row mb-10">
                                    <div className="col-lg-12 col-md-12 cms" dangerouslySetInnerHTML={{__html: offers.find(x => toSnakeCase(x.title) === id).text}}>
                                    </div>
                                </div>
                            </div>

                                {/*how it work start*/}
                                <section className="position-relative bg-light mt-10" data-bg-img={require(`../assets/images/bg/02.png`)}>
                                    <div className="container mt-8 mb-10">
                                        {/* / .row */}
                                        { offerFlux ? offerFlux.flux.map((item, i) => 
                                            <div key={i} className="row align-items-center justify-content-between mb-10 mt-8">
                                                <div className={`col-12 col-lg-4 ${ (i%2 === 0) ? 'order-lg-1' : '' } mb-6 mb-lg-0`}>
                                                    <img src={require(`../assets/images/offers/offre_${item.image}`)} alt={`Silexia ${item.title}`} className="img-fluid" />
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