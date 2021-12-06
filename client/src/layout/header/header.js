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
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'

import Modal from '../../widgets/common/modal';
import SigninForm from '../../widgets/account/signin';
import Autodiag from '../../widgets/autodiag/autodiag';
import { API_GET } from '../../functions/apiRequest';

window.fn = OwlCarousel;

const Header = ({setShowAutodiag, showAutodiag}) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ loader, setLoader ] = useState(true);
    const [ articles, setArticles ] = useState();

    const location = useLocation();
    const [showLogin, setShowLogin] = useState(false);
  
    useEffect(() => {
      setShowLogin(false);
    }, [location]);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    
    const handleClick = (e) => {
        var elems = document.querySelectorAll(".childsubmenu");
        [].forEach.call(elems, function(el) {
          el.classList.remove("show");
        });
    }

    useEffect(() => {
        API_GET("articles").then(result => setArticles(result));
    },[]);

    return (
        <>
            { loader ? 
                setTimeout(() => { setLoader(false); }, 2000)
            : '' } 
            <header className="site-header header-fixed">
                { (!loader) ?
                    <div id="header-wrap">
                        <div className="container">
                            <div className="row">
                                {/*menu start*/}
                                <div className="col d-flex align-items-center justify-content-between"> 
                                    <Link className="navbar-brand logo text-dark h2 mb-0" to="/"><img className="logo img-fluid" src={require(`../../assets/images/logo.png`)} alt="Logo Silexia" /></Link>
                                    <Navbar className="navbar-expand-lg navbar-light ml-auto">
                                            <NavbarToggler onClick={toggle} />
                                            <Collapse isOpen={isOpen} className=" navbar-collapse" navbar>
                                                <Nav className="ml-auto" navbar>
                                                    {navLinks.map((navLink, index) => (
                                                        (navLink.type && navLink.type === 'subMenu') ?
                                                            // Submenu link
                                                            <UncontrolledDropdown nav inNavbar key={index}>
                                                                <DropdownToggle nav  caret >
                                                                    {navLink.menu_title}
                                                                </DropdownToggle>
                                                                <DropdownMenu id={`submenu_${index}`} className="childsubmenu">
                                                                    {navLink.child_routes && navLink.child_routes.map((subNavLink, index) => (
                                                                            (subNavLink.type && subNavLink.type === 'childsubMenu') ?
                                                                                <UncontrolledDropdown nav inNavbar className="dropdown-submenu" key={index}>
                                                                                    <DropdownToggle nav caret className="dropdown-item" >
                                                                                        {subNavLink.menu_title}
                                                                                    </DropdownToggle>
                                                                                    <DropdownMenu id={`childsubmenu_${index}`}>
                                                                                        {subNavLink.child_routes && subNavLink.child_routes.map((ChildsubNavLink, i) => {
                                                                                            if (ChildsubNavLink.path.includes('://')) {
                                                                                                return <a onClick={toggle} className="dropdown-item" target="_blank" key={index} tag={Link} href={ChildsubNavLink.path}>{ChildsubNavLink.menu_title}</a>
                                                                                            } else {
                                                                                                return <DropdownItem key={i} tag={Link} to={ChildsubNavLink.path} onClick={(e) => handleClick(e)} >{ChildsubNavLink.menu_title}</DropdownItem>
                                                                                            }
                                                                                        })}
                                                                                    </DropdownMenu>
                                                                                </UncontrolledDropdown>
                                                                            :
                                                                                subNavLink.path.includes('://') ? 
                                                                                    <a className="dropdown-item" target="_blank" key={index} tag={Link} href={subNavLink.path}>{subNavLink.menu_title}</a>
                                                                                : 
                                                                                    <DropdownItem onClick={toggle} key={index} tag={Link} to={subNavLink.path}>{subNavLink.menu_title}</DropdownItem>
                                                                    ))}
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                            :
                                                            <NavItem key={index}>
                                                                { navLink.path.includes('://') ?
                                                                    // Extern link
                                                                    <NavLink onClick={toggle} target="_blank" href={navLink.path}>{navLink.menu_title}</NavLink>
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
                                                    <NavItem>
                                                        <a className="btn btn-primary btn-small mt-3 mt-lg-0 ml-lg-0" onClick={toggle} onClick={() => setShowAutodiag(true)}>Démarrer mon diagnostic</a>
                                                    </NavItem>
                                                </Nav>
                                            </Collapse>
                                        </Navbar>
                                </div>
                                {/*menu end*/}
                            </div>
                        </div>
                    </div>
                    :
                    <div id="ht-preloader">
                        <div className="loader clear-loader">
                            <span />
                            <p>Silexia</p>
                        </div>
                    </div>
                }

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
                    { articles ? articles.map((item, i) => 
                        <div key={i} className="header-banner-item">
                            <p><span>Actualités</span> : { item.title } <Link className="link link-primary" to={{pathname: `/blog/${item['id']}`, state: { items: item }}}>En savoir plus</Link></p>
                        </div>
                    ) : ''}
                </OwlCarousel>
            </header>

            <Modal 
                title={`Connexion`}
                body={<SigninForm />}
                closeButton="Fermer"
                show={showLogin}
                setShow={setShowLogin}
            />

            <Modal
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