import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'
import './Socrata.css';

import tylerLogo from "../../images/tyler-logo-header.png";
import socrataLogo from "../../images/Socrata-logo.jpg";
import surfaceData from "../../images/surface-data.jpg";
import discover from "../../images/Discover-Connections.jpg";
import shareData from "../../images/share-data.jpg";


import plus from "../../images/Plus.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


class Socrata extends Component {
    render() {
        return (
            <div className="socrata-container">
                <Header />
                <div className="splash-img2">
                    <h1>Tyler Has Acquired Socrata!</h1>
                    <h3>Two market leaders with a shared focus and vision partnering to unleash data and insights.</h3>
                    <h3>Welcome to the future.</h3>
                </div>
                <div className="combination">
                    <h1>An Industry-Changing Combination</h1>
                    <p>Tyler and Socrata have shared a common focus since their beginnings: transforming government through data and technology. Each is considered the market leader in their own space: Tyler as the largest company singularly focused on delivering the back-end systems to local governments and schools, and Socrata as the pioneer of data-enabled innovations delivering insights to government and its citizens.</p>
                    <div className="logos">
                        <img className="logo" src={tylerLogo} /> <img className="plus" src={plus} /> <img className="logo" src={socrataLogo} /> </div>
                </div>
                <div className="shared-vision">
                    <h1>A Shared Vision: Delivering Connected Communities</h1>
                    <p>The companies have been on converging paths to realize the same vision:
to connect data and processes across the disparate systems of government.</p>
                    <div className="connects">
                        <div className="connect-box">Connect data geographically, crossing city, county and district lines</div>
                        <div className="connect-box">Connect processes across department and agency boundaries</div>
                        <div className="connect-box">Connect citizens to their government through transparency and access</div>
                    </div>
                </div>
                <div className="data-wrapper">
                    <div className="data-box">
                        <img src={surfaceData} />
                        <div className="data-content">
                            <h1>Surface Meaning From Your Data</h1>
                            <p>You expect software to have basic tools to analyze your data, like reports and dashboards. Socrata leaps beyond that status quo and lifts data visualization to the next level, allowing those most able to affect outcomes to analyze and interpret their data like never before. To uncover financial trends, to understand the impact of operational decisions, and to predict statistical outcomes. All in real-time. Out-of-the box with Tyler solutions. And so intuitive you won’t even have to call for IT.</p>
                        </div>
                    </div>
                    <div className="data-box">
                        <img src={discover} />
                        <div className="data-content">
                            <h1>Discover Insights Through Connections</h1>
                            <p>The unique strength of Socrata is bringing together seemingly unrelated data to uncover hidden insights and measure program accountability through transparency. The big problems facing government aren’t isolated in one data set — problems such as crime and recidivism rates, budget deficits, aging infrastructure, homelessness and the opioid crisis, just to name a few. Data-system agnostic, Socrata gives you the tools to connect data points across systems like never before.</p>
                        </div>
                    </div>
                    <div className="data-box">
                        <img src={shareData} />

                        <div className="data-content">
                            <h1>Share and Engage Through Open Data</h1>
                            <p>Information is power. The real power of realizing insights is being able to share your information with others: your constituents, internal staff, external board members, community executives and others. Socrata builds engagement functionality directly into their system through their open-data platform and allows the building of stories around your data as a seamless process.</p>
                        </div>
                    </div>
                </div>
                <div className="conclusion">
                    <div className="sec1"><h1>The future is bright with Tyler &amp; Socrata</h1>
                        <p>The potential to layer Socrata’s powerful data technology on top of Tyler’s back-office operational systems in more than 15,000 local government offices will allow us to provide data and insights on a scale that has the opportunity to fundamentally change the way local government understands their operations, uses their resources and serves their constituents.</p>
                    </div>
                    <div className="sec2">
                        <div className="sec2-box">
                            <img className="logo" src={tylerLogo} />
                            <p>Tyler Technologies (NYSE: TYL) is a leading provider of end-to-end information management solutions and services for local governments. Tyler partners with clients to empower the public sector — cities, counties, schools and other government entities — to become more efficient, more accessible and more responsive to the needs of their constituents. Tyler's client base includes more than 15,000 local government offices in all 50 states, Canada, the Caribbean, Australia, and other international locations.</p>
                        </div>
                        <div className="sec2-box">
                            <img className="logo" src={socrataLogo} />
                        <p>Socrata is the market leader in making existing government data discoverable, usable, and actionable for government workers and the people they serve. Socrata provides a data-as-a-service platform and cloud applications exclusively for city, county, state, and federal government organizations. Socrata delivers unprecedented, data-driven innovation and cost-savings by bringing together disparate systems and leveraging the cloud to dramatically enhance the effectiveness of government programs, to improve quality of life for residents, positively impact local economies, and achieve excellence in government operations.</p></div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Socrata;