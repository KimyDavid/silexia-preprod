import React, { Component } from 'react';

class Feature extends Component {
    render() {
        return (
            <section className="text-center p-0 py-5 my-10 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-6">
                            <div className="px-2 px-md-4 py-3 py-md-7 rounded hover-translate">
                                <div>
                                    <img className="w-75 mb-2" src={require(`../../assets/images/about/speed_test.svg`)} alt="Gagner du temps" />
                                </div>
                                <p className="mb-0 mt-3 text-primary font-w-5">Gagnez du temps avec notre générateur de mentions légales 100 % conformes</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="px-2 px-md-4 py-3 py-md-7 rounded hover-translate">
                                <div>
                                    <img className="w-75 mb-2" src={require(`../../assets/images/about/tasks.svg`)} alt="Assistance" />
                                </div>
                                <p className="mb-0 mt-3 text-primary font-w-5">Vous êtes assistée pas à pas pour générer vos mentions légales</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 mt-6 mt-sm-0">
                            <div className="px-2 px-md-4 py-3 py-md-7 rounded hover-translate">
                                <div>
                                    <img className="w-75 mb-2" src={require(`../../assets/images/about/cookie.svg`)} alt="Inventaire des cookies" />
                                </div>
                                <p className="mb-0 mt-3 text-primary font-w-5">Notre générateur inclut l'inventaire des cookies de votre site</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 mt-6 mt-sm-0">
                            <div className="px-2 px-md-4 py-3 py-md-7 rounded hover-translate">
                                <div>
                                    <img className="w-75 mb-2" src={require(`../../assets/images/about/add_files.svg`)} alt="Mettre à jour rapidement" />
                                </div>
                                <p className="mb-0 mt-3 text-primary font-w-5">Évaluez et mettez à jour facilement vos mentions légales</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <a href="#legal-generator" className="btn btn-primary mt-5">Démarrer</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Feature;