import React, { useState, useEffect } from 'react';
import navLinks from '../../constants/NavSilexia';
import OwlCarousel from 'react-owl-carousel';  
import { useLocation, Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

import Modal from '../../widgets/common/modal';
import SigninForm from '../../widgets/account/signin';
import Autodiag from '../../widgets/autodiag/autodiag';
import { API_GET } from '../../functions/apiRequest';

window.fn = OwlCarousel;

const Header = ({setShowAutodiag, showAutodiag}) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ articles, setArticles ] = useState();

    const location = useLocation();
    const [showLogin, setShowLogin] = useState(false);
  
    useEffect(() => {
      setShowLogin(false);
    }, [location]);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        API_GET("articles").then(result => setArticles(result));

        const submenuParent = document.querySelectorAll('.nav-item-parent');
        submenuParent.forEach(parent => {
            parent.addEventListener('click', () => {
                if (parent.classList.contains('active')) {
                    parent.classList.remove('active');
                } else {
                    submenuParent.forEach(_parent => {
                        _parent.classList.remove('active');
                    });
    
                    parent.classList.add('active');
                }
            });
        });
    },[]);

    return (
        <>
            <header className="site-header header-fixed">
                { 
                    <div id="header-wrap">
                        <div className="container">
                            <div className="row">
                                {/*menu start*/}
                                <div className="col d-flex align-items-center justify-content-between bg-white"> 
                                    <Link className="navbar-brand logo text-dark h2 mb-0" to="/"><img className="logo img-fluid" src={require(`../../assets/images/logo.svg`)} alt="Logo Silexia" width="120" height="40" /></Link>
                                    <Navbar className="navbar-expand-lg navbar-light ml-auto">
                                            <NavItem className="d-none d-sm-block d-lg-none">
                                                <a className="btn btn-primary btn-small mt-0 mr-4" onClick={toggle} onClick={() => setShowAutodiag(true)}>Démarrer mon diagnostic</a>
                                            </NavItem>

                                            <NavbarToggler onClick={toggle} />

                                            <Collapse isOpen={isOpen} className=" navbar-collapse" navbar>
                                                <Nav className="ml-auto" navbar>
                                                    {navLinks.map((navLink, index) => (
                                                        (navLink.type && navLink.type === 'subMenu') ?
                                                            // Submenu link
                                                            <li className="nav-item nav-item-parent" key={index}>
                                                                <a href={navLink.path} className="nav-link">{navLink.menu_title}</a>
                                                                <div className="nav-item-submenu">
                                                                    <div className="container justify-content-center">
                                                                        <div className="nav-item-submenu-content">
                                                                            <p className="nav-item-submenu-title">
                                                                                <strong>{navLink.menu_subtitle}</strong>
                                                                            </p>
                                                                            {navLink.child_routes && navLink.child_routes.map((subNavLink, index) => (
                                                                                
                                                                                (index !== (navLink.child_routes.length - 1)) ? 
                                                                                    subNavLink.path.includes('://') ? 
                                                                                        <a className="nav-link" target="_blank" key={index} href={subNavLink.path} dangerouslySetInnerHTML={{__html: subNavLink.menu_title}}></a>
                                                                                    : 
                                                                                        <a className="nav-link" key={index} href={subNavLink.path} dangerouslySetInnerHTML={{__html: subNavLink.menu_title}}></a>
                                                                                : 
                                                                                    <a href={subNavLink.path} target="_blank" class="btn btn-primary btn-small mt-5 nav-item-submenu-button">{subNavLink.menu_title}</a>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            :
                                                            <NavItem key={index}>
                                                                { navLink.path.includes('://') ?
                                                                    // Extern link
                                                                    <NavLink onClick={toggle} target="_blank" href={navLink.path} rel="noopener" rel="noreferrer">{navLink.menu_title}</NavLink>
                                                                : 
                                                                    navLink.modal ? 
                                                                    // Modal Link
                                                                        location.pathname !== '/profile' ? <NavLink onClick={toggle} onClick={() => {setShowLogin(true)}}>{navLink.menu_title}</NavLink> : ''
                                                                    : 
                                                                    // Basic link
                                                                    <NavLink onClick={toggle} href={navLink.path}> {navLink.menu_title}</NavLink>
                                                                }
                                                            </NavItem>
                                                    ))}
                                                    <NavItem className="d-sm-none d-lg-block">
                                                        <div className="d-flex align-items-center h-100">
                                                            <a className="btn btn-primary btn-small mt-3 mt-lg-0 ml-lg-0" onClick={toggle} onClick={() => setShowAutodiag(true)}>Démarrer mon diagnostic</a>
                                                        </div>
                                                    </NavItem>
                                                </Nav>
                                            </Collapse>
                                    </Navbar>
                                </div>
                                {/*menu end*/}
                            </div>
                        </div>
                    </div>
                }

                { articles ?
                    <OwlCarousel
                        className={`header-banner`}
                        dotData={false}
                        items={1}
                        autoplay={true}
                        margin={30}
                        dots={false}
                        nav={false}
                        loop={true}
                    >
                        { articles.map((item, i) => 
                            <div key={i} className="header-banner-item">
                                <p><span>Actualités</span> : { item.title } <Link className="link link-primary" to={{pathname: `/blog/${item['id']}`, state: { items: item }}}>Lire l'article</Link></p>
                            </div>
                        )}
                    </OwlCarousel>
                : '' }
            </header>

            <Modal 
                title={`Connexion`}
                body={<SigninForm setShowAutodiag={setShowAutodiag} setShowLogin={setShowLogin} />}
                closeButton="Fermer"
                show={showLogin}
                setShow={setShowLogin}
            />

            <Modal
                id={"popup-autodiag"}
                size="xl"
                body={<Autodiag />}
                closeButton="Fermer"
                show={showAutodiag}
                setShow={setShowAutodiag}
            />
        </>
    );
}

export default Header;