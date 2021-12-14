import React, { Component } from 'react';
import { Parallax,ParallaxProvider  } from 'react-scroll-parallax';

class Herosection1 extends Component {
    render() {
        return (
            <section className="position-relative overflow-hidden py-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 py-md-11 pb-5 pb-md-0 z-index-1">
                            <h1 className="h2 mt-8 font-w-5 text-primary">Rédigeons vos mentions légales <span className="h3 font-w-5 text-black d-block">en 5 minutes (et gratuitement)</span></h1>
                            <p className="h6">Facilitez-vous la vie en utilisant notre générateur de mentions légales qui vous assiste à chaque étape pour mettre en conformité votre site web à la Loi sur la Confiance dans l'Économie Numérique !</p>
                            <a href="#generator-faq" className="btn btn-primary mt-5">En savoir plus</a>
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
                                <img className="w-75 thumbnail" src={require(`../../assets/images/legal-generator.png`)} alt="Générateur de mentions légales" />
                            </Parallax>
                        </ParallaxProvider >
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Herosection1;