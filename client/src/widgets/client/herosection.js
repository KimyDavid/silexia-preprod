import React, {  } from 'react';
import { Parallax,ParallaxProvider  } from 'react-scroll-parallax';

const Herosection = ({header}) => {
        return (
            <section className="position-relative overflow-hidden py-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 py-md-11 pb-5 pb-md-0 z-index-1">
                            <h1 className="h2 mt-8 font-w-5 text-primary">PRÊT À METTRE LE NUMÉRIQUE <span className="font-w-5 text-black d-block">{header.subtitle} ?</span></h1>
                            <p className="h6">{header.description}</p>
                            <a href="#banner" className="btn btn-primary mt-5">En savoir plus</a>
                        </div>
                    </div>
                </div>
                {/* / .container */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center">
                        {/* <div className="heroparallax"> */}
                        <ParallaxProvider>
                            <Parallax className="heroparallax" x={[-45, 20]} >
                                <img className="w-75 thumbnail" src={require(`../../assets/images/about/${header.image}`)} alt="Générateur de mentions légales" />
                            </Parallax>
                        </ParallaxProvider >
                        </div>
                    </div>
                </div>
            </section>
        );
}

export default Herosection;