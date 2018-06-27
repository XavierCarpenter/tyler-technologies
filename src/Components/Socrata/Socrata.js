import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'
import './Socrata.css';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";


class Socrata extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="Socrata-container">
                <Header />
            <h1>Tyler aquiress Socrata</h1>
                <Footer />
            </div>
        )
    }
}

export default Socrata;