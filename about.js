import React from 'react';

import Img from '../imeges/aboutimg.jpg';
import '../components/about.css'
// import {CardColumns} from 'react-bootstrap';
import {Card} from 'react-bootstrap';

const About = () => {
    return (
        <>
        
            <div className='aboutpage my-5' style={{ backgroundImage: `url(${Img})`,
             backgroundRepeat: 'no-repeat',
              height: '700px',width:'100%'
                 }}>
                     
                     
                     <p style={{height:'50px',width:'40px',border:'2px',color:"white"}}>this is hkghjg nmvhjg </p>
                    <h1 className='about my-5' style={{fontSize:'50px', color: 'white', textAlign:"right",marginRight:'10px'}}>About Us</h1>
                    <h1 style={{fontSize:'50px', color:'white' , textAlign:'right'}}>50</h1>
                  <Card style={{width:'18rem'}}>
                    
                     <Card.Body className='dummy1' >This is some text within a card body.</Card.Body>
                  </Card>
                  <p>this is </p>
                  <Card style={{width:'18rem'}}>
                  <Card.Body className="dummy " > This is some text within a card body.</Card.Body>
                  </Card>
                 </div>
        
        </>
    )
}
export default About;