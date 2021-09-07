import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_GET } from '../../../functions/apiRequest';
import { toSnakeCase } from '../../../functions/string';
import OwlCarousel from 'react-owl-carousel';

const FeatureServices = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        API_GET('offres').then(response => setOffers(response));
    }, []);

        return (
            <div className="row mt-5">
                <div className="col-12 mt-5">
                { offers.length > 0 ?  
                    <OwlCarousel className="owl-carousel" autoplayHoverPause={true} dots={false} nav={true} autoplay={true} margin={20} > 
                        {offers.map((offer, i) => 
                            <Link to={{pathname: `offres/${toSnakeCase(offer.title)}`, state: {offer: offer}}} className="item" key={i}>
                                <div className="portfolio-item position-relative overflow-hidden">
                                    <img className="img-center w-100" src={offer.image ?? require("../../../assets/images/about/06.png")} alt="" />
                                    <div className="portfolio-title d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 className="btn-link text-white" >{offer.title}</h6>
                                            <small className="text-light mb-2 abstract abstract-2">{offer.abstract}</small>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </OwlCarousel>
                : null }
                </div>
            </div>

        );
}

export default FeatureServices;