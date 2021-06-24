import React from 'react';
import Navbaar from '../components/NavBar';
import Crousal from '../components/crousal';

import Abt from '../components/about.js';
import Card1 from '../components/Card1.js';
// import Gallary from '../components/gallery';
import CardPropArray from '../components/CardPropArray'; 
import Card1Prop from '../components/Card1Prop';
const FrontPage = () => {
    
    return (
        <>
            <Navbaar />
            <Crousal />
            <CardPropArray />
            <Abt />
            <Card1Prop />
            {/* <Gallary /> */}
        </>
    )
}
export default FrontPage;