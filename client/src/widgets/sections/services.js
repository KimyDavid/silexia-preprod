import React, { useEffect, useState } from 'react';
import { API_GET } from '../../functions/apiRequest';

const Services = () => {
    const [offers, setOffers] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
        API_GET('offres').then(response => setOffers(response));
    }, []);

        return (
            <>
                { offers ? 
                    <>
                            <div className="container">
                                <div className="row align-items-end">
                                <div className="col-lg-6 col-md-6 text-white">
                                    <div> <span className="badge badge-light-soft p-2">
                                        <i className="la la-cubes ic-3x rotation" />
                                    </span>
                                    <h2 className="mb-5 mb-md-0 mt-3">Les domaines évalués lors de ce diagnostic</h2>
                                    </div>
                                </div>
                                { offers.map((offer, i) => 
                                    <div key={i} className={`col-lg-6 col-md-6 ${i === 0 || i === 1 ? '' : 'mt-6'}`}>
                                        <div className="bg-primary-soft rounded mb-0">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="mr-3">
                                                <img className="img-fluid services-icons" src={require(`../../assets/images/icon/${offer.id}.png`)} alt={`${offer.title}`} loading="lazy"/>
                                            </div>
                                            <h5 className="m-0 text-light">{offer.title}</h5>
                                        </div>
                                        <p className="mb-0 text-white">{offer.abstract}</p>
                                        </div>
                                    </div>
                                ) }
                            </div>
                        </div>
                        <div className="shape-1" style={{height: '150px', overflow: 'hidden'}}>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                            <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                            </svg>
                        </div>
                        <div className="shape-1 bottom" style={{height: '200px', overflow: 'hidden'}}>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                            <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#f5faff'}} />
                            </svg>
                        </div>
                    </>
                : '' }
            </>
                   
        );
}

export default Services;