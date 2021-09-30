import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import ContactNewsletter from './contact';

class Footer extends Component {
    render() {
        return (
            <footer className="py-11 mt-5 bg-primary position-relative" data-bg-img="assets/images/bg/03.png">
                <div className="shape-1" style={{height: '150px', overflow: 'hidden'}}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                    <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                </svg>
                </div>
                <Container  className=" mt-11">
                <Row>
                    <div className="col-12 col-lg-5 col-xl-5 mr-auto mb-6 mb-lg-0">
                        <ContactNewsletter/>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-6">
                        <Row>
                            <Col className="col-12 col-sm-6 navbar-dark">
                            <h5 className="mb-4 text-white">Pages</h5>
                            <ul className="navbar-nav list-unstyled mb-0">
                                <li className="mb-3 nav-item"><Link className="nav-link" to="/about-us">À propos</Link> 
                                </li>
                                <li className="mb-3 nav-item"><Link className="nav-link" to="/offres">Offres</Link> 
                                </li>
                                <li className="mb-3 nav-item"><Link className="nav-link" to="/reseau">Réseau</Link> 
                                </li>
                                <li className="mb-3 nav-item"><Link className="nav-link" to="/blog">Blog</Link> 
                                </li>
                                <li className="mb-3 nav-item"><Link className="nav-link" to="/profile">Mon compte</Link> 
                                </li>
                                <li className="mb-3 nav-item"><Link className="nav-link" to="/autodiag">Autodiag</Link> 
                                </li>
                            </ul>
                            </Col>
                            <Col className="col-12 col-sm-6 mt-6 mt-sm-0 navbar-dark">
                            <h5 className="mb-4 text-white">Legal</h5>
                            <ul className="navbar-nav list-unstyled mb-0">
                                <li className="mb-3 nav-item"><Link className="nav-link" to="/mentions-legales">Mentions légales</Link> 
                                </li>
                                <li className="mb-3 nav-item"><Link className="nav-link" to="/conditions-generales-de-vente">Conditions générales de vente</Link> 
                                </li>
                                <li className="mb-3 nav-item"><Link className="nav-link" to="/conditions-generales-utilisation">Conditions générales d'utilisation</Link> 
                                </li>
                                <li className="nav-item"><Link className="nav-link" to="/politique-de-confidentialite">Politique de confidentialité</Link> 
                                </li>
                            </ul>
                            </Col>
                        </Row>
                        <Row className="mt-5" >
                            <Col className="col-12 col-sm-6">
                                <Link className="footer-logo text-white h2 mb-0" to="/">
                                    <img className="logo img-fluid" src={require(`../../assets/images/logo_white.png`)} alt="Logo Silexia" />
                                </Link> 
                            </Col>
                            <Col className="col-12 col-sm-6 mt-6 mt-sm-0">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item"><Link className="text-light ic-2x" to="https://www.facebook.com/Silexias"><i className="la la-facebook" /></Link> 
                                </li>
                                <li className="list-inline-item"><Link className="text-light ic-2x" to="tel:0635266607"><i className="la la-phone" /></Link> 
                                </li>
                                <li className="list-inline-item"><Link className="text-light ic-2x" to="mailto:contact@silexia.fr"><i className="la la-envelope" /></Link> 
                                </li>
                                <li className="list-inline-item"><Link className="text-light ic-2x" to=""><i className="la la-instagram" /></Link> 
                                </li>
                                <li className="list-inline-item"><Link className="text-light ic-2x" to="https://www.linkedin.com/company/silexias/"><i className="la la-linkedin" /></Link> 
                                </li>
                            </ul>
                            </Col>
                        </Row>
                    </div>
                </Row>
                <Row className="text-white text-center mt-8">
                    <Col>
                    <hr className="mb-8" />Copyright 2021 Silexia | Tous droits réservés.</Col>
                </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;