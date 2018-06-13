import React, { Component } from 'react';
import './Home.css';
import logo from "../../images/tyler-logo-header.png";
import AT from "../../images/AT.png";
import CJ from "../../images/CJ.png";
import DI from "../../images/DI.png";
import FIN from "../../images/FIN.png";
import PRM from "../../images/PRM.png";
import PS from "../../images/PS.png";
import RD from "../../images/RD.png";
import SCH from "../../images/Sch.png";


class Home extends Component {
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
            <div className="home-container">
                <header>
                    <div className="logo-container"><img className="logo" src={logo} /></div>
                    <div className="login-register"><h4>Login</h4> | <h4>Register</h4></div>

                    {this.state.navActive === false ? <div className="hamburger"><i onClick={() => this.changeNav()} className="fas fa-bars" /></div> :
                    <div className="hamburger"><i onClick={() => this.changeNav()} className="fas fa-times" /></div> }                   
                </header>
                {/* <nav className="main-nav">
                    <ul>
                        <li>Home</li>
                        <li>Solutions &amp; Products</li>
                        <li>The Tyler Expierence</li>
                        <li>About Us</li>
                        <li>Client Support</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                        <li>Investors</li>

                    </ul>
                </nav> */}

                {this.state.navActive === true ? <nav className="mobile-nav">
                    <input placeholder="Search"/>
                    <ul className="mobile-nav-list">
                        <li>Home</li>
                        <li>Solutions &amp; Products</li>
                        <li>The Tyler Expierence</li>
                        <li>About Us</li>
                        <li>Client Support</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                        <li>Investors</li>

                    </ul>
                </nav>
                    : null}
                <div className="splash-img">
                    <h1>Tyler Has Acquired Socrata!</h1>
                    <h3>Two market leaders with a shared focus and vision partnering to unleash data and insights.</h3>
                    <h3>Welcome to the future.</h3>
                    <button className="btn">Learn More</button>
                </div>
                <div className="about"><p>Tyler Technologies is the <span className="bold">largest software company</span> in the nation solely focused on providing integrated software and technology services to the public sector — cities, counties, states, and school districts.</p>
                    <p>Public sector software isn't just what we do, <span className="bold">it's all we do</span>.</p></div>
                <hr />
                <div className="services-container">
                    <ul className="services-list">
                        <li className="services"><img src={AT} /><p>Appraisal &amp;
Tax</p></li>
                        <li className="services"><img src={CJ} /><p>Courts &amp;
Justice</p></li>
                        <li className="services"><img src={DI} /><p>Data &amp;
Insights
</p></li>
                        <li className="services"><img src={FIN} /><p>ERP
Financial</p></li>
                        <li className="services"><img src={PRM} /><p>Planning,
Regulatory
&amp; Maintenance</p></li>
                        <li className="services"><img src={PS} /><p>Public Safety</p></li>
                        <li className="services"><img src={RD} /><p>Records &amp;
Documents</p></li>
                        <li className="services"><img src={SCH} /><p>Schools</p></li>

                    </ul>
                </div>
                <div className="get-started">
                    <h1>Get <span className="bold">Started</span></h1>
                    <div className="nav2">
                        <ul className="nav2-list">
                            <li><button className="btn">Get Product Support</button></li>
                            <li><button className="btn">Find a Job</button></li>
                            <li><button className="btn">Solutions &amp; Products</button></li>
                            <li><button className="btn">Attend an Event</button></li>
                            <li><button className="btn">Tyler Community</button></li>
                            <li><button className="btn">Watch a video</button></li>
                        </ul>
                    </div>
                </div>
                <div className="news-events">
                    <h1>News &amp; <span className="bold">Events</span></h1>
                    <div className="stories">
                        <div className="story-box">
                            <h3>Tyler Technologies to Acquire Socrata</h3>
                            <p className="story">Tyler Technologies, Inc. (NYSE: TYL) today announced it has signed a definitive agreement to acquire Socrata, Inc., a Seattle-based venture-backed technology company, focused exclusively on accelerating the shift to digital government. The expected closing date is April 30, 2018.</p>
                            <p className="more">Read More</p>
                        </div>
                        <div className="story-box">
                            <h3 >Tyler Technologies Acquires Sage Data Security</h3>
                            <p className="story">Tyler Technologies, Inc. (NYSE: TYL) today announced it has acquired Sage Data Security, LLC, leading experts in cybersecurity. Sage offers a suite of services that supports an entire cybersecurity lifecycle, including program development, education and training, threat detection, technology testing, advisory services, and digital forensics.</p>
                            <p className="more">Read More</p>
                        </div>
                        <div className="story-box">
                            <h3 >Press Releases</h3>
                            <p className="story date">Jun 12, 2018 </p>
                            <p>Travis County, Texas, First in State to Select Tyler Technologies' Modria Solution</p>
                            <p className="more">See all press releases</p>
                        </div>
                    </div>
                </div>
                <footer>Follow Us</footer>
            </div>
        )
    }
}

export default Home;