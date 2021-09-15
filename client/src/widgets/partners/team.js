import React from 'react';

const Team2 = ({partners}) => {
        return (
          <div className="col-12 col-md-12 col-lg-8">
            <div className="row align-items-center">
              { partners ? partners.map((partner, i) => 
                <div key={i} className="col-12 col-lg-4 col-md-6 mb-0">
                  <div className="p-3 d-flex align-items-center shadow mt-4">
                    <div>
                      <h5 className="mb-2">{partner.name}</h5>            
                      <p>{partner.abstract}</p> 
                    </div>
                  </div>
                </div>
              ) : ''}
            </div>
          </div>
       
        );
}

export default Team2;