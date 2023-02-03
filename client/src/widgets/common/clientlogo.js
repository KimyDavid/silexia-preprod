import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';  
import { API_GET } from '../../functions/apiRequest';
import { Link } from 'react-router-dom';
import Modal from './modal';
window.fn = OwlCarousel;

const Clientlogo = () => {
    const [partners, setPartners] = useState([]);
    const [selectedPartner, setSelectedPartner] = useState();
    const [showModal, setShowModal] = useState(false);

    const updateSelectedPartner = (partner) => {
      setShowModal(true)
      API_GET(`partners/${partner.id}`).then(result => setSelectedPartner(result));
    }

    useEffect(() => {
        API_GET('partners').then((result) => {
            let newPartners = partners;
            if (result) {
                result.forEach(partner => {
                    if (partner.label === "Partenaires nationaux" || partner.label === "Fournisseurs de services") {
                        newPartners = newPartners.concat(partner.partners);
                    }
                });
                setPartners(newPartners);
            }
        });
    }, []);

    const responsive = {
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1024:{
            items:4,
        },
    }

        return (
            <>
                { partners.length > 0 ?
                <>
                    <div className="row justify-content-center text-center">
                        <div className="col-12 mb-0">
                            <div className="mb-lg-8">
                                <h2 className="mt-3 h4">Nous travaillons à leurs côtés</h2>
                            </div>

                            <OwlCarousel
                                    className={`owl-carousel`}
                                    dotData={false}
                                    items={4}
                                    autoplay={true}
                                    margin={30}
                                    dots={false}
                                    nav={false}
                                    loop={false}
                                    responsive={responsive}
                                >
                                    { partners.map((partner, i) =>
                                        <div className="item" key={i}>
                                            <div className="p-3 partner-item d-flex align-items-center shadow bg-white rounded mt-4" onClick={() => updateSelectedPartner(partner)}>
                                                <div className="w-100 text-center">
                                                { partner.image ? <img src={partner.image} alt={`${partner.name}`} className="img-fluid mb-2 partner-img" loading="lazy" width="178" height="125" />: '' }
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
                                    ) }
                            </OwlCarousel>

                        </div>
                    </div> 
                    <div className="w-100 d-flex justify-content-center">
                        <Link className="btn btn-primary" to={"partners"}>Voir tous les partenaires</Link>
                    </div>


                    {selectedPartner ? 
                    <Modal 
                        title={`Plus d'information sur ${selectedPartner.name}`}
                        body={
                            <>
                                <div className="text-center">
                                    <img className="mb-2" width="220" src={selectedPartner.image} alt={selectedPartner.name} loading="lazy"/>
                                </div>
                                <div className="text-black" dangerouslySetInnerHTML={{__html: selectedPartner.text}}></div>
                                <div className="text-center">
                                    { selectedPartner.url ? <a href={selectedPartner.url} target="_blank" className="btn btn-primary mt-5">Voir le site web</a> : '' }
                                </div>
                            </>}
                        show={showModal}
                        setShow={setShowModal}
                    /> : '' }
                </> : '' }
            </>
        );
}

export default Clientlogo;