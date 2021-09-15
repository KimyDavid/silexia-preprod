import React, { useEffect, useState } from 'react';
import {toSnakeCase} from '../../functions/string';
import { API_GET } from '../../functions/apiRequest';

const Services = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        API_GET('offres').then(response => setOffers(response));
    }, []);

        return (
            <section className="custom-pt-1 custom-pb-2 bg-gradient position-relative" data-bg-img={require(`../../assets/images/bg/02.png`)}>
                    <div className="container">
                        <div className="row align-items-end">
                        <div className="col-lg-6 col-md-6 text-white">
                            <div> <span className="badge badge-light-soft p-2">
                                <i className="la la-cubes ic-3x rotation" />
                            </span>
                            <h2 className="mt-3 mb-0">Les domaines évalués lors de ce diagnostic</h2>
                            </div>
                        </div>
                        { offers ? offers.map((offer, i) => 
                            <div key={i} className="col-lg-6 col-md-6 mt-6">
                                <div className="bg-primary-soft rounded">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="mr-3">
                                        <img className="img-fluid services-icons" src={require(`../../assets/images/icon/${offer.id}.png`)} alt="" />
                                    </div>
                                    <h5 className="m-0 text-light">{offer.title}</h5>
                                </div>
                                <p className="mb-0 text-white">{offer.abstract}</p>
                                </div>
                            </div>
                        ) : '' }
                        </div>
                    </div>
                    <div className="shape-1" style={{height: '150px', overflow: 'hidden'}}>
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
                   
        );
}

export default Services;