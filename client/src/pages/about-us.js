import React, { Component } from 'react';
import Memberaboutus from '../widgets/sections/home2/about-us';
import FeatureServices from '../widgets/sections/home2/services';
import Pageheading from '../widgets/Pageheading';
import ModalVideo from 'react-modal-video';
import Blog from '../widgets/sections/blog';

class Aboutus extends Component {
    constructor() {
      super()
      this.state = {
          isOpen: false
      }
      this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <div>
                <section className="position-relative py-6">
                    <Pageheading title={"À propos de Silexia"}/>
                </section>
                <div className="page-content">
                    {/*about start*/}
                    <section>
                        <div className="container">
                            <Memberaboutus />
                        </div>

                            {/*how it work start*/}
                            <section className="position-relative bg-light mt-10" data-bg-img={require(`../assets/images/bg/02.png`)}>
                              <div className="container mt-8 mb-10">
                                <div className="row justify-content-center text-center">
                                  <div className="col-12 col-md-12 col-lg-8 mb-lg-0 mb-8">
                                    <div>
                                      <span className="badge badge--large badge-primary-soft p-2 font-w-6">Nos valeurs</span>
                                      <h2 className="mt-3 font-w-5 mb-0 h3">Nous accompagnons les TPE et PME dans le traitement de leurs enjeux et le développement de leur rôle social.</h2>
                                    </div>
                                  </div>
                                </div>
                                {/* / .row */}
                                <div className="row align-items-center justify-content-between mb-10 mt-8">
                                  <div className="col-12 col-lg-4 mb-6 mb-lg-0">
                                    <img src={require(`../assets/images/about/innovation.svg`)} alt="Silexia valeur innovation" className="img-fluid" />
                                  </div>
                                  <div className="col-12 col-lg-6">
                                    <div>
                                      <h2><span className="badge badge-primary-soft p-2">01</span></h2>
                                      <h4 className="mt-3">Innovation</h4>
                                      <p className="mb-0">Nous fournissons des solutions numériques clés en main tout en conseillant nos clients dans leurs choix technologiques en fonction de leur stratégie et objectifs.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="row align-items-center justify-content-between mb-10">
                                  <div className="col-12 col-lg-4 order-lg-1 mb-6 mb-lg-0">
                                    <img src={require(`../assets/images/about/europe.svg`)} alt="Silexia valeur made in europe" className="img-fluid" />
                                  </div>
                                  <div className="col-12 col-lg-6">
                                    <div>
                                      <h2><span className="badge badge-primary-soft p-2">02</span></h2>
                                      <h4 className="mt-3">Made in Europe</h4>
                                      <p className="mb-0">Nous prenons le parti de favoriser des solutions numériques made in Europe car nous croyons à l’émergence d’une tech européenne, respectueuse de la vie privée et efficace dans leurs services aux organisations.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="row align-items-center justify-content-between">
                                  <div className="col-12 col-lg-4 mb-6 mb-lg-0">
                                    <img src={require(`../assets/images/about/environnement.svg`)} alt="Silexia valeur environnement" className="img-fluid" />
                                  </div>
                                  <div className="col-12 col-lg-6 mb-10">
                                    <div>
                                      <h2><span className="badge badge-primary-soft p-2">03</span></h2>
                                      <h4 className="mt-3">Environnement</h4>
                                      <p className="mb-0">Lorsque nous déployons des solutions numériques chez nos clients, nous favorisons toujours des services, logiciels, hébergements ou serveurs respectueux de l’environnement.</p>
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


                        <div className="container">
                            <div className="row justify-content-center text-center">
                              <div className="col-12 col-md-12 col-lg-10 mb-4 mb-lg-0">
                                <div className="mb-8">
                                  <h2 className="mt-3 font-w-6 h3 mb-5">Votre bureau de pilotage du numérique dans votre organisation</h2>
                                  <div className="row text-justify">
                                    <div className="col-12 col-md-6 col-lg-4">
                                      <p className="mb-0">Avec de fortes compétences en analyse des systèmes d’information, gestion de projets numériques, marketing et conformité aux normes en vigueur, Silexia et ses partenaires font du numérique une opportunité de développement pour votre organisation. </p>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                      <p className="mb-0">Fournisseur de solutions numériques, nous avons à cœur de vous apporter des solutions concrètes et réalisables à court terme tout en construisant avec vous votre stratégie de développement par le numérique.</p>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                      <p className="mb-0">Que ce soit pour un simple coup de pouce, un accompagnement stratégique de plus long terme ou un besoin d’externalisation, Silexia est votre bureau de pilotage du numérique, capable de rassembler et coordonner les compétences nécessaires à la réussite de vos projets !</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row align-items-end mb-5">
                                <div className="col-12 col-md-12 col-lg-8">
                                    <div>
                                        <span className="badge badge-primary-soft p-2"><i className="la la-clipboard-list ic-3x rotation" /></span>
                                        <h2 className="mt-4 mb-0 h3">Nos offres</h2>
                                    </div>
                                </div>
                            </div>
                            <FeatureServices />

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

                    

                    {/* <section>
                      <div className="container">
                        <div className="row">
                          <ModalVideo channel='youtube' isOpen={this.state.isOpen} autoplay={true} videoId='P_wKDMcr1Tg' onClose={() => this.setState({ isOpen: false })} />

                          <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                            <div className="row align-items-center">
                              <div className="col-6">
                                <img src={require(`../assets/images/about/10.jpg`)} className="img-fluid rounded shadow-lg" alt="..." />
                              </div>
                              <div className="col-6">
                                <img src={require(`../assets/images/about/11.jpg`)} className="img-fluid rounded shadow-lg mb-5" alt="..." />
                                <img src={require(`../assets/images/about/12.jpg`)} className="img-fluid rounded shadow-lg" alt="..." />
                              </div>
                            </div>
                          </div>

                          <div className="col-12 col-lg-6 py-11 z-index-1">
                            <div className="video-btn ml-5"> 
                              <a className="play-btn popup-youtube" onClick={this.openModal}><i className="la la-play" /></a>
                              <div className="spinner-eff">
                                <div className="spinner-circle circle-2" />
                              </div>
                            </div>
                            <h1 className="display-4 mt-8 font-w-5">
                                Bootsland All In One Solution For Your Website
                            </h1>
                            <p className="lead text-muted">Build a Beautiful, Clean &amp; Modern Design website with flexible Bootstrap components.</p>
                          </div>
                        </div>
                      </div>
                    </section> */}
                </div>
            </div>
        );
    }
}

export default Aboutus;