import React from 'react';
import '../components/Card1.css';

const Card1 = (props) => {
    return (
        <>
            <div className='card1Img'>
                <img 
                    src={props.imgsrc} />
               </div>
        </>
    )

}
export default Card1;