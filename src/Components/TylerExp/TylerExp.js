import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'
import './TylerExp.css';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";


class TylerExp extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="TylerExp-container">
                <Header />
                <div className="TylerExp-img">
                </div>
                <div className="breadcrumbs"><Link to="/">Home</Link> > Tyler Expierence</div>
                <div className="solutions-wrapper">
                    <div className="TylerExp-info">
                        <h1>Empowering the Public Sector</h1>
                        <h3>Innovative solutions that empower you to serve the public</h3>
                        <p>At Tyler, <span className="bold">we empower the people who serve the public</span> by providing local governments and school districts with innovative, fully integrated software and services. In fact, we devote all our time, energy and resources to <span className="bold">help local governments and school districts become more efficient, accessible and responsive to the needs of their constituents</span>. Our comprehensive software solutions span the full range of mission-critical services that government entities address every day.</p>
                        <p>From product development to implementation and long-term maintenance of a project, we are committed at every step of the way to deliver and support a total user experience that ensures our clients have all the tools they need to be successful. Learn more about The Tyler Experience »</p>
                        <p>We monitor industry trends and proactively respond to the changing needs of the public sector —  cloud-based offerings, mobile computing and paperless environments. Learn more about transformative technologies »</p>
                        <h2>Public Sector Domain Expertise</h2>
                        <p>Our domain expertise is strengthened by the fact that many of our employees have years of experience working at public sector agencies prior to joining Tyler. These professionals speak the language of our clients and truly understand what the public sector needs to operate at its best.</p>
                    </div>
                    <div className="quick-links">
                        <div className="solutions-links">
                            <h1>Tyler Solutions</h1>
                            <ul className="solutions-links-list">
                                <a href="#"><li >Appraisal &amp; Tax</li></a>
                                <a href="#"><li >Courts &amp; Justice</li></a>
                                <a href="#"> <li>Data &amp; Insights</li></a>
                                <a href="#"><li >ERP Financial</li></a>
                                <a href="#"><li >Planning, Regulatory &amp; Maintenance</li></a>
                                <a href="#"><li >Public Safety</li></a>
                                <a href="#"><li >Records &amp; Documents</li></a>
                                <a href="#"><li >Schools</li></a>
                            </ul>
                        </div>
                        <div className="products-links">
                            <h1>Tyler Products</h1>
                            <ul className="products-links-list">
                                <a href="#"><li >» AES</li></a>
                                <a href="#"><li >» Brazos</li></a>
                                <a href="#"><li>» CLT Appraisal Services</li></a>
                                <a href="#"><li >» Document Pro</li></a>
                                <a href="#"><li >» Eagle</li></a>
                                <a href="#"><li >» Eden</li></a>
                                <a href="#"><li >» EnerGov</li></a>
                                <a href="#"><li >» ExecuTime</li></a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="news-events">
                    <div className="stories2">
                        <div className="story-box2">
                            <h3>GET MORE INFORMATION</h3>
                            <p className="story2"><a href="">Download the Tyler corporate overview brochure »</a></p>
                        </div>
                        <div className="story-box2">
                            <h3 >DISCOVER THE TYLER EXPERIENCE</h3>
                            <p className="story2">We give you the tools you need to meet all of your obligations, as well as and manage your complex, mission-critical functions.</p>
                            <p className="more2"> Learn more about The Tyler Experience »</p>
                        </div>
                        <div className="story-box2">
                            <h3 >TRANSFORM THE WAY YOU WORK</h3>
                            <p className="story2">Our products and services empower you to deliver better and faster assistance to citizens — greater transparency and accessibility, sustainable office practices, secure data that’s easy to manage and maintain and faster results. </p>
                            <p className="more2">Learn more about transformative technologies »

</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default TylerExp;