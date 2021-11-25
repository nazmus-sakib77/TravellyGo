import React from 'react';
import Banner from '../Banner/Banner';
import OurService from '../OurService/OurService';
import TourPackage from '../OurTourPackage/TourPackage';

import Popular from '../Popular/Popular';

const Home = () => {
    return (
        <div id="home">
           <Banner></Banner>
           <OurService></OurService>
           <Popular></Popular>
           <TourPackage></TourPackage>
        </div>
    );
};

export default Home;