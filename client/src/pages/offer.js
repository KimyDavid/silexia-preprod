import React, { useEffect } from 'react';
import OfferHeading from '../widgets/offers/heading';
import { useLocation, useParams } from "react-router-dom";
import Offers from '../constants/Offers';
import PricingPlan from '../widgets/offers/pricingplan';

const Offer = () => {
    const { state } = useLocation();
    const { id } = useParams();
    const offer = Offers[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div>
            {/*hero section start*/}
            <section>
                <div className="container">
                    <OfferHeading item={state.offer} />
                </div>
            </section>
            {/*hero section end*/}
            {/*body content start*/}
            <div className="page-content">
                {/*privacy start*/}
                <section>
                    <div className="container">
                        <div className="row mb-10">
                            <div className="col-lg-12 col-md-12 cms" dangerouslySetInnerHTML={{__html: state.offer.text}}>
                            </div>
                        </div>

                        {offer ? <PricingPlan offer={offer} /> : '' }
                    </div>
                </section>
                {/*privacy end*/}
            </div>
            {/*body content end*/}
        </div>

    );
}

export default Offer;