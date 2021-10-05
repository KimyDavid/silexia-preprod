import React, { useState, useEffect } from 'react';
import navLinks from '../../constants/NavSilexia2';
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


const Header = ({setToken}) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ visible, setVisible ] = useState(false);
    const [ loader, setLoader ] = useState(true);

    const location = useLocation();
    const [showLogin, setShowLogin] = useState(false);
    const [showAutodiag, setShowAutodiag] = useState(false);
  
    useEffect(() => {
      setShowLogin(false);
    }, [location]);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const handleScroll = () => {
        var scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;
        if (scrollTop > 100) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    }
    
    const handleClick = (e) => {
        var elems = document.querySelectorAll(".childsubmenu");
        [].forEach.call(elems, function(el) {
          el.classList.remove("show");
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {handleScroll()});

        return window.removeEventListener('scroll', handleScroll);
    },[]);

    return (
        <>
            { loader ? 
                setTimeout(() => { setLoader(false); }, 2000)
            : '' } 
            <header className="site-header">
                { (!loader) ?
                    <div id="header-wrap" className={`${visible ? "fixed-header " : ""}`}>
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
                                                                                        {subNavLink.child_routes && subNavLink.child_routes.map((ChildsubNavLink, i) =>
                                                                                            <DropdownItem key={i} tag={Link} to={ChildsubNavLink.path}  onClick={(e) => handleClick(e)} >{ChildsubNavLink.menu_title}
                                                                                            </DropdownItem>
                                                                                        )}
                                                                                    </DropdownMenu>
                                                                                </UncontrolledDropdown>
                                                                            :
                                                                            <DropdownItem key={index} tag={Link} to={subNavLink.path}>{subNavLink.menu_title}
                                                                            </DropdownItem>
                                                                    ))}
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                            :
                                                            <NavItem key={index}>
                                                                { navLink.path.includes('://') ?
                                                                    // Extern link
                                                                    <NavLink target="_blank" href={navLink.path}> {navLink.menu_title}</NavLink>
                                                                : 
                                                                    navLink.modal ? 
                                                                    // Modal Link
                                                                        location.pathname !== '/profile' ? <NavLink onClick={() => {setShowLogin(true)}}>{navLink.menu_title}</NavLink> : ''
                                                                    : 
                                                                    // Basic link
                                                                    <NavLink href={navLink.path}> {navLink.menu_title}</NavLink>
                                                                }
                                                            </NavItem>
                                                    ))}
                                                    <NavItem>
                                                        <a className="btn btn-primary btn-small mt-3 mt-lg-0 ml-lg-3" onClick={() => setShowAutodiag(true)}>Démarrer mon diagnostic</a>
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
            </header>

            <Modal 
                title={`Connexion`}
                body={<SigninForm setToken={setToken} />}
                closeButton="Fermer"
                show={showLogin}
                setShow={setShowLogin}
            />

            <Modal
                size="lg"
                body={<Autodiag />}
                closeButton="Fermer"
                show={showAutodiag}
                setShow={setShowAutodiag}
            />
        </>
    );
}

export default Header;