import React, { useEffect, useState } from 'react';
import { API_GET } from '../../functions/apiRequest';
import Modal from '../common/modal';
import Projects from './projects';

const ProjectsSlider = ({content}) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState();
    const [projects, setProjects] = useState([]);
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        API_GET(`partners/page/${content.id}`).then(response => {
            API_GET(`partners_type`).then(partnersType => {
                // récupérer l'id du type de partenaire "projet" pour le différencier des autres types
                let projectTypeId = null;
                partnersType.forEach(_item => {
                    if (_item.label === "Projets clients") {
                        projectTypeId = _item.id;
                    }
                });

                // récupérer la liste des projets à partir de l'id du type
                const projectsList = [];
                response.forEach(_item => {
                    if (_item.type === projectTypeId) {
                        projectsList.push(_item);
                    }
                });

                // récupérer la liste des partenaires
                const partnersList = [];
                response.forEach(_item => {
                    if (_item.type !== projectTypeId) {
                        partnersList.push(_item);
                    }
                });

                setPartners(partnersList);
                setProjects(projectsList);
            });
        });
    }, []);

        return (
            <>
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

                { partners && partners.length > 0 ?
                    <section className="p-0">
                        <div className="container">
                            <div className="row align-items-end mb-lg-5">
                                <div className="col-12">
                                    <div className="text-left">
                                        <span className="badge badge-primary-soft p-2"><i className="la la-clipboard-list ic-3x rotation" /></span>
                                        <h2 className="mt-4 mb-0 h4">Nos partenaires</h2>
                                    </div>
                                </div>
                            </div>
                            <Projects projects={partners} setSelectedProject={setSelectedProject} setShowModal={setShowModal} />
                        </div>
                    </section>
                : "" }

                {selectedProject ? 
                    <Modal 
                        title={`${selectedProject.name}`}
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

export default ProjectsSlider;