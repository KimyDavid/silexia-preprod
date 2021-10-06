import React, { useEffect, useState } from 'react';
import { API_GET } from '../../../functions/apiRequest';

const Skillbox = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        API_GET('offres').then(response => setOffers(response));
    }, []);

        return (
            <section>
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-lg-4 col-xl-3 mb-8 mb-lg-0 order-lg-1">
                            <img src={require(`../../../assets/images/about/06.png`)} alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-12 col-lg-8 col-xl-8">
                            <div className="mb-md-8">
                                <h2 className="font-w-6">One Platform, Deep Insight Why Choose Bootsland</h2>
                            </div>
                            <div className="row">
                                { offers ? offers.map((offer, i) => 
                                    <div key={i} className="col-lg-6 col-md-6 mt-5">
                                        <div className="d-flex align-items-start">
                                            {/* <div className="mr-3 p-3 border rounded border-light shadow-primary">
                                                <img className="img-fluid" src={require(`../../../assets/images/icon/01.svg`)} alt={offer.title} />
                                            </div> */}
                                            <div>
                                                <h6 className="mb-2 text-primary">{offer.title}</h6>
                                                <p className="mb-0 abstract abstract-3">{offer.abstract}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : '' }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
}

export default Skillbox;