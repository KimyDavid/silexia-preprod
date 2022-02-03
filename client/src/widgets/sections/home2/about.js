import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';

class About1 extends Component {
    render() {
        return (
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-12 col-lg-6 mb-6 mb-lg-0 mt-5">
                <OwlCarousel
                    className="owl-carousel owl-center no-pb"
                    dotData={false}
                    dots={false}
                    center={true}
                    items={3}
                    autoplay={true}
                    loop={true}
                  >
                    <div className="item mobile-mockup-wrapper">
                      <img className="img-fluid mobile-mockup" src={require(`../../../assets/images/screens/screen1.png`)} alt="Autodiagnostic Silexia" loading="lazy" width="165" height="250" />
                    </div>
                    <div className="item mobile-mockup-wrapper">
                      <img className="img-fluid mobile-mockup" src={require(`../../../assets/images/screens/screen2.png`)} alt="Autodiagnostic Silexia" loading="lazy" width="165" height="250" />
                    </div>
                  </OwlCarousel>
                </div>
                <div className="col-12 col-lg-6 col-xl-5">
                  <div>
                    <h2 className="h4">Diagnostiquez la maturité numérique de votre organisation</h2>
                    <p className="">Répondez aux questionnaires de notre nouvelle webapp pour facilier vos démarches de développement numérique.</p>
                  </div>
                  <div className="d-flex flex-wrap justify-content-start mt-6">
                    <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                      <div className="d-flex align-items-center">
                        <div className="badge-primary-soft rounded p-1">
                          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <p className="mb-0 ml-3 text-black">Questionnaire intelligent</p>
                      </div>
                    </div>
                    <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                      <div className="d-flex align-items-center">
                        <div className="badge-primary-soft rounded p-1">
                          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <p className="mb-0 ml-3 text-black">Analyse en profondeur de votre organisation</p>
                      </div>
                    </div>
                    <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                      <div className="d-flex align-items-center">
                        <div className="badge-primary-soft rounded p-1">
                          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <p className="mb-0 ml-3 text-black">Résultats en moins de 10 minutes</p>
                      </div>
                    </div>
                    <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                      <div className="d-flex align-items-center">
                        <div className="badge-primary-soft rounded p-1">
                          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <p className="mb-0 ml-3 text-black">Recommandations personnalisées</p>
                      </div>
                    </div>
                  </div> <Link to="/diagnostic" className="btn btn-outline-primary mt-5">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
        );
    }
}

export default About1;