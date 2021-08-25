import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_GET } from '../../../functions/apiRequest';
import { toSnakeCase } from '../../../functions/string';

const FeatureServices = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        API_GET('offres').then(response => setOffers(response));
    }, []);

        return (
            <div className="row align-items-center">
                { offers ? offers.map((offer) => 
                <Link to={{pathname: `offres/${toSnakeCase(offer.title)}`, state: {offer: offer}}} className="col-xl-4 col-lg-4 mb-8 mb-lg-0 mt-3">
                    <div>
                        <div className={`px-4 py-7 rounded hover-translate text-center shadow`}>
                            <div>
                                <img className="img-fluid" src={require(`../../../assets/images/svg/01.svg`)} alt="" />
                            </div>
                            <h5 className="mt-4 mb-3">{offer.title}</h5>
                            <p class="abstract abstract-4">{offer.abstract}</p>
                            <p className="btn-link">Read Details</p>
                        </div>
                    </div>
                </Link>
                ) : '' }
            </div>

        );
}

export default FeatureServices;