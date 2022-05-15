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
                                    <div className="col d-flex align-items-center justify-content-between"> 
                                        <Link className="navbar-brand logo text-dark h2 mb-0" to="/"><img className="logo img-fluid" src={require(`../../assets/images/logo.png`)} alt="Logo Silexia"  width="120" height="40"/></Link>
                                        <Navbar className="navbar-expand-lg navbar-light ml-auto">
                                                <NavbarToggler onClick={this.toggle} />
                                                <Collapse isOpen={this.state.isOpen} className=" navbar-collapse" navbar>
                                                    <Nav className="ml-auto" navbar>
                                                        {navLinks.map((navLink, index) => (
                                                            (navLink.type && navLink.type === 'subMenu') ?
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
                                                                                                    return <a onClick={this.toggle} className="dropdown-item" target="_blank" key={index} tag={Link} href={ChildsubNavLink.path}>{ChildsubNavLink.menu_title}</a>
                                                                                                } else {
                                                                                                    return <DropdownItem key={i} tag={Link} to={ChildsubNavLink.path} onClick={(e) => this.handleClick(e)} >{ChildsubNavLink.menu_title}</DropdownItem>
                                                                                                }
                                                                                            })}
                                                                                        </DropdownMenu>
                                                                                    </UncontrolledDropdown>
                                                                                :
                                                                                subNavLink.path.includes('://') ? 
                                                                                    <a onClick={this.toggle} className="dropdown-item" target="_blank" key={index} tag={Link} href={subNavLink.path}>{subNavLink.menu_title}</a>
                                                                                : 
                                                                                    <DropdownItem onClick={this.toggle} key={index} tag={Link} to={subNavLink.path}>{subNavLink.menu_title}</DropdownItem>
                                                                        ))}
                                                                    </DropdownMenu>
                                                                </UncontrolledDropdown>
                                                                :
                                                                <NavItem key={index} onClick={this.toggle}>
                                                                    { navLink.path.includes('://') ?
                                                                        <NavLink onClick={this.toggle} target="_blank" href={navLink.path} rel="noopener" rel="noreferrer"> {navLink.menu_title}</NavLink>
                                                                    : 
                                                                        <NavLink onClick={this.toggle} href={navLink.path}> {navLink.menu_title}</NavLink>
                                                                    }
                                                                </NavItem>
                                                        ))}
                                                        <NavItem>
                                                            <Link onClick={this.toggle} className="btn btn-primary btn-small ml-lg-3" to="/profile">Mon diagnostic</Link>
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
                            { this.state.articles.map((item, i) => 
                                <div key={i} className="header-banner-item">
                                    <p><span>Actualités</span> : { item.title } <Link className="link link-primary" to={{pathname: `/blog/${item['id']}`, state: { items: item }}}>Lire l'article</Link></p>
                                </div>
                            )}
                        </OwlCarousel>
                    : '' }
                </header>
            </>
        );
    }
}

export default Header;