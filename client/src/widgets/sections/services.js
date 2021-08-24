import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <section className="custom-pt-1 custom-pb-2 bg-gradient position-relative" data-bg-img={require(`../../assets/images/bg/02.png`)}>
                    <div className="container">
                        <div className="row align-items-end">
                        <div className="col-lg-6 col-md-6 text-white">
                            <div> <span className="badge badge-light-soft p-2">
                                <i className="la la-cubes ic-3x rotation" />
                            </span>
                            <h2 className="mt-3 mb-0">Les domaines évalués lors de ce diagnostic</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="bg-primary-soft rounded">
                            <div className="d-flex align-items-center mb-4">
                                <div className="mr-3">
                                <img className="img-fluid services-icons" src={require(`../../assets/images/icon/acquisition-client.png`)} alt="" />
                                </div>
                                <h5 className="m-0 text-light">Acquisition client</h5>
                            </div>
                            <p className="mb-0 text-white">Assurer un flux d’affaires constant est le premier objectif pour votre organisation. Pour cela, le numérique est votre allié que ce soit pour trouver de nouveaux prospects, gérer vos cycles commerciaux ou communiquer aux bonnes personnes et aux bons moments ! Alors, pensez-vous utiliser le plein potentiel du numérique pour obtenir de nouveaux clients ? </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mt-6">
                            <div className="bg-primary-soft rounded">
                            <div className="d-flex align-items-center mb-4">
                                <div className="mr-3">
                                <img className="img-fluid services-icons" src={require(`../../assets/images/icon/relation-client.png`)} alt="" />
                                </div>
                                <h5 className="m-0 text-light">Relation client</h5>
                            </div>
                            <p className="mb-0 text-white">Entretenir un lien étroit avec vos clients est essentiel pour vous assurer de les garder le plus longtemps possible ! Soyez transparent avec votre client, informer le sur le déroulé de ce que vous lui délivrez, vérifier sa satisfaction à la fin de la prestation rendue ou du produit vendu ! Prêt à voir comment votre relation client peut être améliorée ?</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mt-6">
                            <div className="bg-primary-soft rounded">
                            <div className="d-flex align-items-center mb-4">
                                <div className="mr-3">
                                <img className="img-fluid services-icons" src={require(`../../assets/images/icon/gestion.png`)} alt="" />
                                </div>
                                <h5 className="m-0 text-light">Gestion d'organisation</h5>
                            </div>
                            <p className="mb-0 text-white">Achat, Inventaire, Vente, Compta, Paie, toutes ces fonctions supports des organisations vivent une profonde mutation grâce au numérique... Digitalisez votre gestion d’entreprise, c’est disposer des meilleurs indicateurs en temps réel sur votre activité ! Prêt à sauter le pas ?</p>x
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mt-6">
                            <div className="bg-primary-soft rounded">
                            <div className="d-flex align-items-center mb-4">
                                <div className="mr-3">
                                <img className="img-fluid services-icons" src={require(`../../assets/images/icon/metiers.png`)} alt="" />
                                </div>
                                <h5 className="m-0 text-light">Métiers</h5>
                            </div>
                            <p className="mb-0 text-white">Achat, Inventaire, Vente, Compta, Paie, toutes ces fonctions supports des organisations vivent une profonde mutation grâce au numérique... Digitalisez votre gestion d’entreprise, c’est disposer des meilleurs indicateurs en temps réel sur votre activité ! Prêt à sauter le pas ?</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mt-6">
                            <div className="bg-primary-soft rounded">
                            <div className="d-flex align-items-center mb-4">
                                <div className="mr-3">
                                <img className="img-fluid services-icons" src={require(`../../assets/images/icon/securité.png`)} alt="" />
                                </div>
                                <h5 className="m-0 text-light">Sécurité et conformité</h5>
                            </div>
                            <p className="mb-0 text-white">Les systèmes d’information professionnels sont de plus en plus exposés aux risques cyber ! Des mesures de sécurité techniques et organisationnelles ainsi que la conformité au règlement général sur la protection des données peuvent vous sauver de sinistres numériques... Alors, où en êtes-vous quant à la protection de votre système d’information ?</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="shape-1" style={{height: '150px', overflow: 'hidden'}}>
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                        <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                        </svg>
                    </div>
                    <div className="shape-1 bottom" style={{height: '200px', overflow: 'hidden'}}>
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                        <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                        </svg>
                    </div>
                    </section>
                   
        );
    }
}

export default Services;