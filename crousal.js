import React from 'react';
import {Carousel} from 'react-bootstrap';
import firstslide from '../imeges/firstslide.png';
import banner from '../imeges/banner.jpg';

const Crousal = () => {
  return (
    <>
      <Carousel className='allbody' style={{backgroundImage:`url(${banner})`,backgroundRepeat:'no-repeat', width: '100%', height:'100%'}}>
        <Carousel.Item>
          <img
          style={{height:'500px'}}
            src={firstslide}
            alt="First slide"
          />
          <div className='text1' style={{textAlign:'center'}}>
            <h3>First slide label</h3>
            <p>Created by Ashutosh Maurya</p>
            </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{height:'500px'}}
            src={firstslide}
              alt="Second slide"
          />
        <div className='text' style={{textAlign:'center'}}>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              lore
            </p>
            <p>lorem ipsum            </p>
            </div>
        </Carousel.Item>
        
         
      </Carousel>
    </>
  )
}
export default Crousal;