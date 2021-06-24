import React from 'react';
import Card1Data from '../components/Card1Data';
import Card1 from '../components/Card1';
import '../components/Card1.css';
const Card1Prop = () =>
{
    
    return (
        <>
            <h1 className="heading mx-5 my-5" style={{ textAlign: 'center', fontSize: '50px' }}><b>Our Gallery</b></h1>

         <div className='Card1-style'>
          <Card1
              imgsrc={Card1Data[0].imagesrc.pic}
          />
          <Card1 
              imgsrc={Card1Data[1].imagesrc.flower}
             />
          <Card1
              imgsrc={Card1Data[2].imagesrc.flower1}
          />
          <Card1
              imgsrc={Card1Data[3].imagesrc.flower2}
          />
          <Card1
              imgsrc={Card1Data[4].imagesrc.flower3}
          />
          <Card1
              imgsrc={Card1Data[5].imagesrc.flower4}
          />
          </div>
        </>
    )
}
export default Card1Prop;