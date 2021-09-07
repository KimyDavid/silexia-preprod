import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'

const OfferHeading = ({item}) => {
  const [isOpen, setIsOpen] = useState(false);
  
    return (

      <div className="row align-items-center">
        <ModalVideo channel='youtube' isOpen={isOpen} autoplay={true} videoId='P_wKDMcr1Tg' onClose={() => setIsOpen(false)} />

        <div className="col-12 col-lg-5 col-xl-6 order-lg-2 mb-3 mb-lg-0">
          {/* Image */}
          <img src={item.image} className="img-fluid" alt="..." />
        </div>
        <div className="col-12 col-lg-7 col-xl-6 order-lg-1">
          {/* Heading */}
          <h1 className="mt-3">{item.title}</h1>
          {/* Text */}
          <p className="text-muted">{item.abstract}</p>
          
          {/* <a onClick={() => setIsOpen(true)} className="btn popup-vimeo link-title"> <i className="la la-play-circle mr-1 ic-3x align-middle" /> Play Video</a> */}
        </div>
      </div>


    );
}

export default OfferHeading;