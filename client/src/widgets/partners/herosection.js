import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Clientlogo from '../common/clientlogo';

class Herosection extends Component {
    render() {
        return (

            <div className="row align-items-center">
                <div className="col-12 col-lg-5 col-lg-6 order-lg-2 mb-8 mb-lg-0">
                    {/* Image */}
                    <img src={require(`../../assets/images/about/06.png`)} className="img-fluid" alt="..." />
                </div>
                <div className="col-12 col-lg-6 order-lg-1">
                    {/* Heading */}
                    <h1 className="display-4">
                        Le <span className="text-primary">Réseau</span>
                    </h1>
                    {/* Text */}
                    <p className="lead text-muted">L’agrégateur de la tech européenne et française au service de la transition numérique des TPE, PME et associations.</p>
                    <Clientlogo logoitems={4} margintop={10} />
                </div>
            </div>

        );
    }
}

export default Herosection;