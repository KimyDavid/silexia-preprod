import React from 'react';
import { API_GET } from '../../functions/apiRequest';
import OwlCarousel from 'react-owl-carousel';

const Projects = ({projects, setSelectedProject, setShowModal}) => {

    const responsive = {
        0:{
            items:2,
        },
        1024:{
            items:3,
        },
        1200:{
            items:4,
        },
    }

    const updateSelectedProject = (partner) => {
      setShowModal(true)
      API_GET(`partners/${partner.id}`).then(result => setSelectedProject(result));
    }

        return (
            <div className="row mt-0">
                <div className="col-12 mt-0">
                { projects.length > 0 ?  
                    <OwlCarousel className="owl-carousel" autoplayHoverPause={true} dots={false} nav={true} loop={false} autoplay={true} margin={20} responsive={responsive}>
                        {projects.map((project, i) => 
                            <div key={i} className="mb-0 d-flex">
                                <div className="p-3 partner-item d-flex shadow bg-white rounded" onClick={() => updateSelectedProject(project)}>
                                    <div className="w-100 text-center">
                                        { project.image ? <img src={project.image} alt={`${project.name}`} className="img-fluid mb-2 partner-img" loading="lazy" />: '' }
                                        <h5 className="mb-2">{project.name}</h5>            
                                        <p>{project.abstract}</p>
                                        { project.text !== '' ? 
                                        <a onClick={() => updateSelectedProject(project)} className="link-primary">En savoir plus</a>
                                        : 
                                        project.url ? <a href={project.url} className="link-primary">En savoir plus</a> : '' 
                                        }
                                    </div>
                                </div>
                            </div>
                        )}
                    </OwlCarousel>
                : null }
                </div>
            </div>

        );
}

export default Projects;