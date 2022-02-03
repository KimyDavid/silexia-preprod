import React, { Component } from 'react';
import Pageheading from '../widgets/Pageheading';
import FeatureServices from '../widgets/sections/home2/services';
import Blog from '../widgets/sections/blog';

class Index extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                {/*hero section start*/}
                <section className="position-relative py-6">
                    <Pageheading title={"Ce que nous faisons"} />
                </section>
                {/*hero section end*/}

                <div className="page-content">
                    <section className="py-0">

                        <div className="container">
                            <div className="text-center mb-10">
                                    <p className="lead mb-10">Activer les leviers numériques à fort impact sur leur organisation ! Découvrez comment le numérique est capable de faire évoluer votre organisation.</p>
                            </div>
                            
                            <FeatureServices />
                        
                            <div className="row justify-content-center text-center">
                              <div className="col-12 col-md-8 mb-4 mb-lg-0 mt-7">
                                <div>
                                  <h2 className="font-w-6 h3 mb-5 mt-10">Votre bureau de pilotage du numérique dans votre organisation</h2>
                                  <p className="columns-2">Avec de fortes compétences en analyse des systèmes d’information, gestion de projets numériques, marketing et conformité aux normes en vigueur, Silexia et ses partenaires font du numérique une opportunité de développement pour votre organisation. Fournisseur de solutions numériques, nous avons à cœur de vous apporter des solutions concrètes et réalisables à court terme tout en construisant avec vous votre stratégie de développement par le numérique. Que ce soit pour un simple coup de pouce, un accompagnement stratégique de plus long terme ou un besoin d’externalisation, Silexia est votre bureau de pilotage du numérique, capable de rassembler et coordonner les compétences nécessaires à la réussite de vos projets !</p>
                                </div>
                              </div>
                            </div>
                        </div>

                        <div className="container-fluid">
                            {/*how it work start*/}
                            <section className="position-relative bg-light mt-10" data-bg-img={require(`../assets/images/bg/02.png`)}>
                              <div className="container mt-8 mb-10">
                                {/* / .row */}
                                  <div className="row">
                                      <div className="text-center mb-6 col-12 col-md-10 offset-md-1">
                                          <div>
                                          <span className="badge badge-primary-soft p-2">
                                              <i className="la la-users ic-3x rotation" />
                                          </span>
                                          <h2 className="mt-4 font-w-5 h3">Notre méthodologie pour maximiser notre impact</h2>
                                          </div>
                                      </div>
                                  </div>
                                <div className="row align-items-center justify-content-between mb-10 mt-8">
                                  <div className="col-12 col-lg-4 mb-6 mb-lg-0">
                                    <img src={require(`../assets/images/about/offers1.svg`)} alt="Silexia valeur innovation" className="img-fluid" loading="lazy"/>
                                  </div>
                                  <div className="col-12 col-lg-6">
                                    <div>
                                      <h2><span className="badge badge-primary-soft p-2">01</span></h2>
                                      <h4 className="mt-3">Évaluation des usages numériques de votre organisation</h4>
                                      <p className="mb-0">Étape incontournable, Silexia dresse un état des lieux de l'intégration du numérique dans votre organisation en relation avec l'état de l'art de votre secteur d'activité et des pratiques de vos concurrents. L'objectif ? Situer votre niveau de digitalisation pour commencer à concevoir votre plan de transformation sur mesure !</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="row align-items-center justify-content-between mb-10">
                                  <div className="col-12 col-lg-4 order-lg-1 mb-6 mb-lg-0">
                                    <img src={require(`../assets/images/about/offers2.svg`)} alt="Silexia valeur made in europe" className="img-fluid" loading="lazy"/>
                                  </div>
                                  <div className="col-12 col-lg-6">
                                    <div>
                                      <h2><span className="badge badge-primary-soft p-2">02</span></h2>
                                      <h4 className="mt-3">Analyse de vos besoins et définition de vos objectifs</h4>
                                      <p className="mb-0">Nous identifions les leviers numériques déterminants pour parvenir à des objectifs atteignables et quantifiables. Une solution unique n'existe pas et la compréhension des enjeux de votre organisation est primordiale. L'objectif ? Identifier les leviers de votre succès par le numérique !</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="row align-items-center justify-content-between">
                                  <div className="col-12 col-lg-4 mb-6 mb-lg-0">
                                    <img src={require(`../assets/images/about/offers3.svg`)} alt="Silexia valeur environnement" className="img-fluid" loading="lazy"/>
                                  </div>
                                  <div className="col-12 col-lg-6 mb-10">
                                    <div>
                                      <h2><span className="badge badge-primary-soft p-2">03</span></h2>
                                      <h4 className="mt-3">Fixation d'un budget dédié au numérique et construction de votre plan d'actions</h4>
                                      <p className="mb-0">En fonction de vos besoins et objectifs, nous vous soumettons plusieurs scénarios de transition numérique chiffrés pour déterminer ensemble le budget le plus adapté à votre organisation en termes de retour sur investissement. L'objectif ? Élaborer votre plan d'actions de transition, détaillé selon les charges, coûts et temps de déploiement !</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="row align-items-center justify-content-between">
                                  <div className="col-12 col-lg-4 order-lg-1 mb-6 mb-lg-0">
                                    <img src={require(`../assets/images/about/offers4.svg`)} alt="Silexia valeur environnement" className="img-fluid" loading="lazy"/>
                                  </div>
                                  <div className="col-12 col-lg-6 mb-10">
                                    <div>
                                      <h2><span className="badge badge-primary-soft p-2">04</span></h2>
                                      <h4 className="mt-3">Association de vos collaborateurs et parties prenantes</h4>
                                      <p className="mb-0">Nous nous assurons que les évolutions envisagées répondent aux besoins métiers de vos collaborateurs et nous les accompagnons lors du déploiement des solutions choisies. L'objectif ? Que vos collaborateurs exploitent parfaitement les nouvelles briques numériques mises en place !</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="row align-items-center justify-content-between">
                                  <div className="col-12 col-lg-4 mb-6 mb-lg-0">
                                    <img src={require(`../assets/images/about/offers5.svg`)} alt="Silexia valeur environnement" className="img-fluid" loading="lazy" />
                                  </div>
                                  <div className="col-12 col-lg-6 mb-10">
                                    <div>
                                      <h2><span className="badge badge-primary-soft p-2">05</span></h2>
                                      <h4 className="mt-3">Suivi de votre feuille de route et mesure des avancées</h4>
                                      <p className="mb-0">Nous débutons les différents chantiers de votre transition numérique selon le calendrier décidé et nous réalisons des points de suivi réguliers pour évaluer les retours sur investissements attendus. L'objectif ? Piloter votre transition numérique pour que le digital devienne votre allié du quotidien.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="shape-1" style={{height: '200px', overflow: 'hidden'}}>
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
                            {/*how it work end*/}
                        </div>


                            <div className="container">
                                <div className="row align-items-end mb-5 mt-10">
                                    <div className="col-12 col-md-12 col-lg-8">
                                        <div>
                                            <span className="badge badge-primary-soft p-2"><i className="la la-bold ic-3x rotation" /></span>
                                            <h2 className="mt-4 mb-0 h3">Notre blog dédié à la transition numérique des TPE/PME</h2>
                                        </div>
                                    </div>
                                </div>
                                <Blog />
                            </div>
                        
                    </section>
                </div>
            </div>
        );
    }
}

export default Index;