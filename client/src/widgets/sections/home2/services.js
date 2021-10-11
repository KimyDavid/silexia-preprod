import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_GET } from '../../../functions/apiRequest';
import { toSnakeCase } from '../../../functions/string';
import OwlCarousel from 'react-owl-carousel';

const FeatureServices = () => {
    const [offers, setOffers] = useState();
    
    const responsive = {
        0:{
            items:1,
        },
        768:{
            items:3,
        },
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        API_GET('offres').then(response => setOffers(response));
    }, []);

        return (
            <div className="row mt-0 mt-md-5">
                <div className="col-12 mt-0 mt-md-5">
                { offers ?  
                    <OwlCarousel className="owl-carousel" autoplayHoverPause={true} dots={false} nav={true} loop={true} autoplay={true} margin={20} responsive={responsive}>
                        {offers.map((offer, i) => 
                            <Link to={{pathname: `offres/${toSnakeCase(offer.title)}`}} className="item" key={i}>
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