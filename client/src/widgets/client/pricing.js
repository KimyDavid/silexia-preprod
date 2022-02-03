import React, {useState} from 'react';
import ContactOffre from '../offers/contact';
import Modal from '../common/modal';

const Pricing = ({title, offers}) => {
    
    const [selectedFormule, setSelectedFormule] = useState('');
    const [showContact, setShowContact] = useState(false);

    const updateContactForm = (name) => {
        setSelectedFormule(`${title} : ${name}`);
        setShowContact(true);
    }

    return (
        <>
            <div className="row mt-5">
                { offers.map((offer, i) =>
                        <div className="col-12 col-lg-4 mb-8 mb-lg-0" key={i}>
                            <div className="card border-0 shadow">
                                <div className="card-body py-4 px-4">
                                    <div className="mb-5 text-center">
                                        <img className="mb-4" src={require(`../../assets/images/offers/${offer.image}`)} alt={`${offer.title}`} height="150" loading="lazy"/>
                                        <h4 className="text-primary">{offer.title}</h4>
                                        <h6 className="text-black font-w-5">{offer.subtitle}</h6>
                                    </div>
                                    { offer.list.map((item, i) => 
                                        <div key={i} className="d-flex align-items-start">
                                            <div className="mr-4">
                                                <i className="la la-check text-primary font-weight-bold" />
                                            </div>
                                            <p>{item}</p>
                                        </div>
                                    )}
                                    <a className="btn btn-block btn-primary mt-5" onClick={ () => updateContactForm(offer.title) }>Je prends contact</a>
                                </div>
                            </div>
                        </div>
                )}
            </div>

            <Modal 
                title={`Demande d'information - ${selectedFormule}`}
                body={<ContactOffre offre={selectedFormule}/>}
                show={showContact}
                setShow={setShowContact}
            />
        </>
    );
}

export default Pricing;