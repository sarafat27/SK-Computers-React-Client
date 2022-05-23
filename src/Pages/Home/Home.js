import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Business from './Business';
import Contact from './Contact';
import Parts from './Parts';
import Best from './Best';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Best></Best>
            <Business></Business>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;