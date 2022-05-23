import React from 'react';
import Banner from './Banner';
import Business from './Business';
import Contact from './Contact';
import Parts from './Parts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Business></Business>
            <Contact></Contact>
        </div>
    );
};

export default Home;