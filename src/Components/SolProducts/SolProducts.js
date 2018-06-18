import React, { Component } from "react";
import Header from "../Header/Header";
import { Link, withRouter } from 'react-router-dom'
import './SolProducts.css';


class SolProducts extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="SolProducts-container">
                <Header />
                <div className="solutions-img">
                </div>
                <div className="breadcrumbs"><Link to="/">Home</Link> > Solutions & Products</div>
                <div className="solutions-wrapper">
                    <div className="solProducts-info">
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
                                <li >Appraisal &amp; Tax</li>
                                    <li >Courts &amp; Justice</li>
                                    <li>Data &amp; Insights</li>
                                    <li >ERP Financial</li>
                                    <li >Planning, Regulatory &amp; Maintenance</li>
                                    <li >Public Safety</li>
                                    <li >Records &amp; Documents</li>
                                    <li >Schools</li>
                            </ul>
                        </div>
                        <div className="products-links">
                            <h1>Tyler Products</h1>
                            <ul className="products-links-list">
                                <li >AES</li>
                                <li >Brazos</li>
                                <li>CLT Appraisal Services</li>
                                <li >Document Pro</li>
                                <li >Eagle</li>
                                <li >Eden</li>
                                <li >EnerGov</li>
                                <li >ExecuTime</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default SolProducts;