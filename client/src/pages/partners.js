import React, { useEffect, useState } from 'react';
import Herosection from '../widgets/partners/herosection'
import Team from '../widgets/partners/team'
import Contact from '../widgets/partners/contact'
import { API_GET } from '../functions/apiRequest'
import Modal from '../widgets/common/modal';

const Partners = () => {
    const [partners, setPartners] = useState([]);
    const [partnerTypes, setPartnerTypes] = useState([]);
    const [selectedPartner, setSelectedPartner] = useState();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        API_GET('partners_type').then(response => {
            setPartnerTypes(response);
            API_GET('partners').then(response => setPartners(response));
        });
    }, []);
    
        return (
            <div>
                <section>
                    <div className="container">
                        <Herosection />
                    </div>
                </section>

                <div className="page-content">
                    {/*team start*/}
                    { partners ? partners.map((partner_type, i) => {
                        const type = partnerTypes.find(x => x.id === partner_type.id);
                        const description =  type.description;
                        return (
                            <div key={i} className="partner-section">
                                { partner_type.partners ? 
                                    <div className="container-fluid px-lg-8">
                                        <div className="text-center">
                                            <h2 className="mt-3 h3 font-w-5">{partner_type.label}</h2>
                                            { description ? <p className="lead text-center">{ description }</p> : '' }
                                        </div>
                                        <Team partners={partner_type.partners} setSelectedPartner={setSelectedPartner} setShowModal={setShowModal} />
                                    </div>
                                : '' }
                            </div>
                        )
                    }) : ''}
                    {/*team end*/}

                    {selectedPartner ? 
                    <Modal 
                        title={`Plus d'information sur ${selectedPartner.name}`}
                        body={
                            <>
                                <div className="text-center">
                                    <img className="mb-2" width="220" src={selectedPartner.image} alt={selectedPartner.name} />
                                </div>
                                <div className="text-black" dangerouslySetInnerHTML={{__html: selectedPartner.text}}></div>
                                <div className="text-center">
                                    { selectedPartner.url ? <a href={selectedPartner.url} target="_blank" className="btn btn-primary mt-5">Voir le site web</a> : '' }
                                </div>
                            </>}
                        show={showModal}
                        setShow={setShowModal}
                    /> : '' }

                    <section>
                        <div className="container">
                            <div className="row justify-content-center mb-5 text-center">
                                <div className="col-12 col-lg-8">
                                <div> <span className="badge badge-primary-soft p-2">
                                    <i className="la la-bold ic-3x rotation" />
                                </span>
                                    <h2 className="mt-4 mb-0">Devenir partenaire</h2>
                                    <p className="lead mb-0">Get in touch and let us know how we can help. Fill out the form and we’ll be in touch as soon as possible.</p>
                                </div>
                                </div>
                            </div>
                            <Contact />
                        </div>
                    </section>
                </div>
            </div>
        );
}

export default Partners;