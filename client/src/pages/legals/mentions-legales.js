import React, { Component } from 'react';
import Pageheading from '../../widgets/Pageheading';

class CGV extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                {/*hero section start*/}
                <section className="position-relative">
                <Pageheading foldername={"Légals"} title={"Mentions légales"} />
                </section>
                {/*hero section end*/}
                {/*body content start*/}
                <div className="page-content">
                    {/*privacy start*/}
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <h4 className="mt-5 text-primary">Siège social</h4>
                                    <p>Silexia</p>
                                    <p>SASU au capital social de 1 000,00 euros</p>
                                    <p>32 avenue Bosquet 75007 Paris</p>
                                    <p>SIRET : 89446221700015</p>
                                    <p>Numéro TVA : FR03894462217</p>
                                    <h4 className="mt-5 text-primary">Contact</h4>
                                    <p>Téléphone : ‭+ 33 (0) 6 35 26 66 07 | +33 (0) 1 45 55 28 44‬</p>
                                    <p>Adresse de courrier électronique : <a href="mailto:contact@silexia.fr">contact@silexia.fr</a></p>
                                    <h4 className="mt-5 text-primary">Représentant légal</h4>
                                    <p>Maxime Lehmann, Président de Silexia</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*privacy end*/}
                </div>
                {/*body content end*/}
            </div>

        );
    }
}

export default CGV;