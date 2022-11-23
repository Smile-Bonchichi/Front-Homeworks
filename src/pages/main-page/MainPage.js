import React, { Component } from 'react';
import AboutUs from '../../components/about-us/AboutUs.js';
import PortfolioPage from '../../components/portfolio-page/PortfolioPage.js';
import ContactsPage from '../../components/contacts-page/ContactsPage.js';

class MainPage extends Component {
    render() {
        return (
            <>
                <p>
                    <AboutUs/>
                </p>
                <p>
                    <PortfolioPage/>
                </p>
                <p>
                    <ContactsPage/>
                </p>
            </>
        );
    }
}

export default MainPage;