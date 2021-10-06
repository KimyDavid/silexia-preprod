import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';

class About1 extends Component {
    render() {
        return (
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                <OwlCarousel
                    className="owl-carousel owl-center no-pb"
                    dotData={false}
                    dots={false}
                    center={true}
                    items={3}
                    autoplay={true}
                    loop={true}
                  >
                    <div className="item">
                      <img className="img-fluid" src={require(`../../../assets/images/app/01.png`)} alt="" />
                    </div>
                    <div className="item">
                      <img className="img-fluid" src={require(`../../../assets/images/app/02.png`)} alt="" />
                    </div>
                    <div className="item">
                      <img className="img-fluid" src={require(`../../../assets/images/app/03.png`)} alt="" />
                    </div>
                    <div className="item">
                      <img className="img-fluid" src={require(`../../../assets/images/app/01.png`)} alt="" />
                    </div>
                    <div className="item">
                      <img className="img-fluid" src={require(`../../../assets/images/app/02.png`)} alt="" />
                    </div>
                    <div className="item">
                      <img className="img-fluid" src={require(`../../../assets/images/app/03.png`)} alt="" />
                    </div>
                  </OwlCarousel>
                </div>
                <div className="col-12 col-lg-6 col-xl-5">
                  <div>
                    <h2 className="font-w-6 h3">Faites l'autodiagnostic de votre entreprise !</h2>
                    <p className="lead">Répondez aux questionnaires de notre nouvelle webapp pour facilier vos démarches de développement numérique.</p>
                  </div>
                  <div className="d-flex flex-wrap justify-content-start">
                    <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                      <div className="d-flex align-items-center">
                        <div className="badge-primary-soft rounded p-1">
                          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <p className="mb-0 ml-3">Questionnaire rapide</p>
                      </div>
                    </div>
                    <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                      <div className="d-flex align-items-center">
                        <div className="badge-primary-soft rounded p-1">
                          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <p className="mb-0 ml-3">Résultats en 10 minutes</p>
                      </div>
                    </div>
                    <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                      <div className="d-flex align-items-center">
                        <div className="badge-primary-soft rounded p-1">
                          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <p className="mb-0 ml-3">Conseils personnalisés</p>
                      </div>
                    </div>
                    <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                      <div className="d-flex align-items-center">
                        <div className="badge-primary-soft rounded p-1">
                          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <p className="mb-0 ml-3">Prise de rendez-vous</p>
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