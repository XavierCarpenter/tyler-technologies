import React, { Component } from "react";
import logo from "../../images/tyler-logo-header.png";
import './Header.css';
import { Link, withRouter } from 'react-router-dom'


class Header extends Component {
    constructor() {
        super();
        this.state = {
            navActive: false
        }
    }
    changeNav() {
        this.setState({ navActive: !this.state.navActive })
    }
    render() {
        return (
            <div className="header-container">
                <header>
                    <div className="top-nav">
                        <div className="logo-container"><Link to="/"><img className="logo" src={logo} />   </Link></div>
                        <div className="hamburger search"><i className="fas fa-search" /></div>
                        <div className="login-register"><h4>Login</h4> | <h4>Register</h4></div>
                        {this.state.navActive === false ? <div className="hamburger bars"><i onClick={() => this.changeNav()} className="fas fa-bars" /></div> :
                            <div className="hamburger"><i onClick={() => this.changeNav()} className="fas fa-times" /></div>}
                    </div>
                    <nav className="main-nav">
                        <ul className="main-nav-list">
                            <Link to="/"> <li>Home</li></Link>
                            <Link to="/solutions-products"><li>Solutions &amp; Products</li></Link>
                            <li>The Tyler Expierence</li>
                            <li>About Us</li>
                            <li>Client Support</li>
                            <li>Careers</li>
                            <li>Contact Us</li>
                            <li>Investors</li>

                        </ul>
                    </nav>
                </header>

                {this.state.navActive === true ? <nav className="mobile-nav">
                    <input placeholder="Search" />
                    <ul className="mobile-nav-list">
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/solutions-products">
                            <li>Solutions &amp; Products</li>
                        </Link>
                        <li>The Tyler Expierence</li>
                        <li>About Us</li>
                        <li>Client Support</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                        <li>Investors</li>

                    </ul>
                </nav>
                    : null}

            </div>
        )
    }
}

export default withRouter(Header);