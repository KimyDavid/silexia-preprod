import React, { useEffect, useState } from 'react';
import OfferHeading from '../widgets/offers/heading';
import { API_GET } from '../functions/apiRequest';
import { useParams } from "react-router-dom";
import Offers from '../constants/Offers';
import { toSnakeCase } from '../functions/string';
import PricingPlan from '../widgets/offers/pricingplan';

const Offer = () => {
    const [offers, setOffers] = useState();
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const offerContent = Offers[id];

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