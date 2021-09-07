import React, { Component } from 'react';
import navLinks from '../../constants/NavSilexia2';
import { BrowserRouter, Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            visible: false,
            loader: true
        }
        this.toggle = this.toggle.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
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
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        var scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;
        if (scrollTop > 100) {
            this.setState({
                visible: true
            });
        }
        else {
            this.setState({
                visible: false
            });
        }
    }

    render() {
        const { visible } = this.state;
        if (this.state.loader == true) {
            setTimeout(function () {
                this.setState({ loader: false });
            }.bind(this), 2000);
        }
        return (
            <header className="site-header">
                {(this.state.loader == false) ?
                    <div id="header-wrap" className={`${(visible) ? "fixed-header " : ""}`}>
                        <div className="container">
                            <div className="row">
                                {/*menu start*/}
                                <div className="col d-flex align-items-center justify-content-between"> 
                                    <Link className="navbar-brand logo text-dark h2 mb-0" to="/"><img className="logo img-fluid" src={require(`../../assets/images/logo.png`)} alt="Logo Silexia" /></Link>
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
                                                                                        {subNavLink.child_routes && subNavLink.child_routes.map((ChildsubNavLink, i) =>
                                                                                            <DropdownItem key={i} tag={Link} to={ChildsubNavLink.path}  onClick={this.handleClick.bind(this)} >{ChildsubNavLink.menu_title}
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
                                                                    <NavLink target="_blank" href={navLink.path}> {navLink.menu_title}</NavLink>
                                                                : 
                                                                    <NavLink href={navLink.path}> {navLink.menu_title}</NavLink>
                                                                }
                                                            </NavItem>
                                                    ))}
                                                </Nav>
                                            </Collapse>
                                        </Navbar>
                                    <Link className="btn btn-primary ml-3 d-none d-lg-block" to="/autodiag">Démarrer mon diagnostic</Link>
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
        );
    }
}

export default Header;