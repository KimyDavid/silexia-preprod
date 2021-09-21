import React from 'react';
import { Link } from 'react-router-dom';

const Team2 = ({partners}) => {
  console.log(partners)
        return (
          <div className="col-12">
            <div className="row justify-content-center">
              { partners ? partners.map((partner, i) => 
                <div key={i} className="col-12 col-lg-4 col-xl-3 col-md-6 mb-0">
                  <div className="p-3 d-flex align-items-center shadow bg-white rounded mt-4">
                    <div className="w-100 text-center">
                      { partner.image ? <img src={partner.image} alt={`${partner.name}`} className="img-fluid mb-2 partner-img" />: '' }
                      <h5 className="mb-2">{partner.name}</h5>            
                      <p>{partner.abstract}</p>
                      { partner.url ? <Link to={partner.url} className="link-primary">En savoir plus</Link> : '' }
                    </div>
                  </div>
                </div>
              ) : ''}
            </div>
          </div>
       
        );
}

export default Team2;