import React from 'react';
import { Link } from 'react-router-dom';
import Particles from "react-particles-js";

const Pageheading = ({title, showBreadcumbs, foldername, subtitle}) => {
    const particlesOptions = {
        "particles": {
            "number": {
                "value": 160,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#dd3e3e"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#546c5c"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    //"src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 4,
                    "size_min": 0.3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }

        return (
            <div className="container">
                <Particles id="particles-js" params={particlesOptions} />
                <div className="row  text-center">
                    <div className="col">
                        <h1>
                            {title}
                            { subtitle ? 
                                <span className="d-block h3 text-primary font-w-6">{ subtitle }</span>
                            : "" }
                        </h1>
                        { showBreadcumbs ? <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center bg-transparent p-0 m-0">
                                <li className="breadcrumb-item"><Link className="text-dark" to="/">Accueil</Link>
                                </li>
                                { foldername ? <li className="breadcrumb-item">{foldername}</li> : '' }
                                <li className="breadcrumb-item active text-primary" aria-current="page">{title}</li>
                            </ol>
                        </nav> : '' }
                    </div>
                </div>
            </div>
        );
}

export default Pageheading;