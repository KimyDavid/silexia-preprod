import React, { Component } from 'react';
import { Parallax,ParallaxProvider  } from 'react-scroll-parallax';
import Pageheading from '../Pageheading';

class Herosection1 extends Component {
    render() {
        return (
            <>
                <section className="position-relative  py-6">
                    <Pageheading title={"Rédigeons vos mentions légales"} subtitle="en 5 minutes (et gratuitement)"/>
                </section>
                <div className="container">
                    <p className="text-center lead mb-10">Facilitez-vous la vie en utilisant notre générateur de mentions légales qui vous assiste à chaque étape pour mettre en conformité votre site web à la Loi sur la Confiance dans l'Économie Numérique !</p>
                </div>
            </>
        );
    }
}

export default Herosection1;