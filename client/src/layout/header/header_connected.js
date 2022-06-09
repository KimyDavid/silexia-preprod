import React from 'react';
import navLinks from '../../constants/NavSilexiaConnected';
import { API_GET } from '../../functions/apiRequest';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';  
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

window.fn = OwlCarousel;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            articles: {},
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleClick(event) {
        var elems = document.querySelectorAll(".childsubmenu");
        [].forEach.call(elems, function(el) {
          el.classList.remove("show");
        });
        this.toggle();
    }

    componentDidMount() {
        API_GET("articles").then(result => this.setState({articles: result}));
    }

    render() {
        return (
            <>
                <header className="site-header header-fixed">
                    {
                        <div id="header-wrap">
                            <div className="container">
                                <div className="row">
                                    {/*menu start*/}
                                    <div className="col d-flex align-items-center justify-content-between bg-white"> 
                                        <Link className="navbar-brand logo text-dark h2 mb-0" to="/"><img className="logo img-fluid" src={require(`../../assets/images/logo.png`)} alt="Logo Silexia" width="120" height="40" /></Link>
                                        <Navbar className="navbar-expand-lg navbar-light ml-auto">
                                                <NavItem className="d-none d-sm-block d-lg-none">
                                                    <a className="btn btn-primary btn-small mt-0 mr-4" href="/profile">Mon diagnostic</a>
                                                </NavItem>

                                                <NavbarToggler onClick={this.toggle} />

                                                <Collapse isOpen={this.state.isOpen} className=" navbar-collapse" navbar>
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
                                                                                    subNavLink.path.includes('://') ? 
                                                                                        <a className="nav-link" target="_blank" key={index} href={subNavLink.path} dangerouslySetInnerHTML={{__html: subNavLink.menu_title}}></a>
                                                                                    : 
                                                                                        <a className="nav-link" key={index} href={subNavLink.path} dangerouslySetInnerHTML={{__html: subNavLink.menu_title}}></a>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                :
                                                                <NavItem key={index}>
                                                                    { navLink.path.includes('://') ?
                                                                        // Extern link
                                                                        <NavLink onClick={this.toggle} target="_blank" href={navLink.path} rel="noopener" rel="noreferrer">{navLink.menu_title}</NavLink>
                                                                    : 
                                                                        // Basic link
                                                                        <NavLink onClick={this.toggle} href={navLink.path}> {navLink.menu_title}</NavLink>
                                                                    }
                                                                </NavItem>
                                                        ))}
                                                        <NavItem className="d-sm-none d-lg-block">
                                                            <div className="d-flex align-items-center h-100">
                                                                <Link onClick={this.toggle} className="btn btn-primary btn-small ml-lg-3" to="/profile">Mon diagnostic</Link>
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

                    { this.state.articles ?
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
                            { this.state.articles.length > 0 ? this.state.articles.map((item, i) => 
                                <div key={i} className="header-banner-item">
                                    <p><span>Actualités</span> : { item.title } <Link className="link link-primary" to={{pathname: `/blog/${item['id']}`, state: { items: item }}}>Lire l'article</Link></p>
                                </div>
                            ) : ''}
                        </OwlCarousel>
                    : '' }
                </header>
            </>
        );
    }
}

export default Header;