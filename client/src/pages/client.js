import React, { useEffect, useState } from 'react';
import Herosection from '../widgets/client/herosection';
import Features from '../widgets/client/features';
import Faq from '../widgets/client/faq';
import Pricing from '../widgets/client/pricing';
import Projects from '../widgets/client/projects';
import Modal from '../widgets/common/modal';
import { API_GET } from '../functions/apiRequest';

const Client = ({title, content}) => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        API_GET(`partners/page/${content.id}`).then(response => {
            setProjects(response);
        });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <Herosection header={content.header} />

            <section className="mt-10 pt-5 position-relative">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div>
                                <p className="h3 text-primary font-w-5 mb-0">COMMENT SILEXIA</p>
                                <h2 className="h2 font-w-5">{content.how.title}</h2>
                                <p className="lead mb-0">{content.how.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0 pb-0">
                <div className="container">
                    <Features bgshadow="bg-white shadow" list={content.how.list}/>
                </div>
            </section>

            
            <section id="banner" className="custom-pb-2 custom-pt-1 bg-primary position-relative">
                <div className="shape-1" style={{height: '150px', overflow: 'hidden'}}>
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                        <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                    </svg>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-5 mr-auto">
                            { content.banner.list ? content.banner.list.map((item, i) => 
                                <div className="d-flex align-items-center mb-4" key={i}>
                                    <span className={`client-banner-icon la la-${item.icon}`}></span>
                                    <p className="h6 font-w-5 text-white mb-0">{item.text}</p>
                                </div>
                            ) : '' }
                        </div>
                        <div className="col-12 col-md-6 text-md-right text-left mt-5 mt-md-0">
                            <h2 className="h3 text-white font-w-5 text-uppercase">{content.banner.title}</h2>
                            <p className="lead lead-small mb-0 text-light">{content.banner.description}</p>
                        </div>
                    </div>
                </div>
                <div className="shape-1 bottom" style={{ height: '200px', overflow: 'hidden' }}>
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                        <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
                    </svg>
                </div>
            </section>

            { content.offers ?
                <section className="pt-2">
                    <div className="container">
                        <div className="row align-items-end justify-content-between">
                            <div className="col-12 mb-5 mb-md-0">
                                <div>
                                    <p className="h3 text-primary font-w-5 mb-0">DÉCOUVREZ NOS FORMULES D'ASSISTANCE</p>
                                    <h2 className="h2 font-w-5">{content.offers.title}</h2>
                                    <p className="lead mb-0">{content.offers.description}</p>
                                </div>
                            </div>
                        </div>
                        <Pricing offers={content.offers.list} title={title} />
                    </div>
                </section>
            : "" }

            { projects && projects.length > 0 ?
                <section className="p-0">
                    <div className="container">
                        <div className="row align-items-end mb-lg-5">
                            <div className="col-12">
                                <div className="text-left">
                                    <span className="badge badge-primary-soft p-2"><i className="la la-clipboard-list ic-3x rotation" /></span>
                                    <h2 className="mt-4 mb-0 h4">Nos projets clients</h2>
                                </div>
                            </div>
                        </div>
                        <Projects projects={projects} setSelectedProject={setSelectedProject} setShowModal={setShowModal} />
                    </div>
                </section>
            : "" }
            
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12 col-md-12 col-lg-10 mb-0">
                            <div className="mb-4 mb-lg-8">
                                <h2 className="mt-3 font-w-6 h3 text-primary">Nos réponses à vos questions</h2>
                                <p className="lead mb-0">N'hésitez pas à nous contacter pour toutes informations complémentaires</p>
                            </div>
                            <Faq questions={content.faq} />
                        </div>
                    </div>
                </div>
            </section>


            {selectedProject ? 
                <Modal 
                    title={`Plus d'information sur ${selectedProject.name}`}
                    body={
                        <>
                            <div className="text-center">
                                <img className="mb-2" width="220" src={selectedProject.image} alt={selectedProject.name} loading="lazy" />
                            </div>
                            <div className="text-black" dangerouslySetInnerHTML={{__html: selectedProject.text}}></div>
                            <div className="text-center">
                                { selectedProject.url ? <a href={selectedProject.url} target="_blank" className="btn btn-primary mt-5">Voir le site web</a> : '' }
                            </div>
                        </>}
                    show={showModal}
                    setShow={setShowModal}
                /> : '' }
        </>
    );
}

export default Client;