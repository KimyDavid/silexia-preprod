import React from 'react';
import { API_GET } from '../../functions/apiRequest';
import OwlCarousel from 'react-owl-carousel';
import { sortByOrder } from '../../functions/sort';

const Team2 = ({partners, setSelectedPartner, setShowModal}) => {

  const updateSelectedPartner = (partner) => {
    setShowModal(true)
    API_GET(`partners/${partner.id}`).then(result => setSelectedPartner(result));
  }

  const responsive = {
      0:{
          items:2,
      },
      768:{
          items:3,
      },
      1024:{
          items:4,
      },
  }

        return (
          <div className="col-12">
            <OwlCarousel className="owl-carousel" responsive={responsive} autoplayHoverPause={true} dots={false} nav={true} autoplay={true} margin={20} > 
              { partners ? sortByOrder(partners).map((partner, i) => 
                <div key={i} className="mb-0">
                  <div className="p-3 partner-item d-flex align-items-center shadow bg-white rounded mt-4" onClick={() => updateSelectedPartner(partner)}>
                    <div className="w-100 text-center">
                      { partner.image ? <img src={partner.image} alt={`${partner.name}`} className="img-fluid mb-2 partner-img" />: '' }
                      <h5 className="mb-2">{partner.name}</h5>            
                      <p>{partner.abstract}</p>
                      { partner.text !== '' ? 
                        <a onClick={() => updateSelectedPartner(partner)} className="link-primary">En savoir plus</a>
                      : 
                        partner.url ? <a href={partner.url} className="link-primary">En savoir plus</a> : '' 
                      }
                    </div>
                  </div>
                </div>
              ) : ''}
            </OwlCarousel>
          </div>
       
        );
}

export default Team2;