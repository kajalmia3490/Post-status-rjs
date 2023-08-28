import React from 'react';
import Home from './Home/Home';
import Membership from './Membership/Membership';
import Partner from './Partner/Partner';
import Latest from './Latest/Latest';
import Subscribe from './Subscribe/Subscribe';
import Jobs from './Jobs/Jobs';
import Community from './Community/Community';
import Footer from '../Footer/Footer';

const Cont = () => {
    return (
        <div>
            <Home />
            <Membership />
            <Partner />
            <Latest />
            <Subscribe />
            <Jobs />
            <Community />
            <Footer />
        </div>
    );
};

export default Cont;