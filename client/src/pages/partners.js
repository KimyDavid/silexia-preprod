import React, { useEffect, useState } from 'react';
import Herosection from '../widgets/partners/herosection'
import Team from '../widgets/partners/team'
import Contact from '../widgets/partners/contact'
import { API_GET } from '../functions/apiRequest'

const Partners = () => {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        API_GET('partners').then(response => setPartners(response));
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
                        return (
                            <div key={i} className="partner-section">
                                { partner_type.partners ? 
                                        <div className="container-fluid px-lg-8">
                                            <div className="text-center">
                                                <h2 className="mt-3 h3 font-w-5">{partner_type.label}</h2>
                                            </div>
                                            <Team partners={partner_type.partners} />
                                        </div>
                                : '' }
                            </div>
                        )
                    }) : ''}
                    {/*team end*/}

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