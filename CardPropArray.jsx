import React from 'react';
import reactDom from 'react-dom';
import  "../Pages/FrontPage.css";
import Cardd from '../components/card.js';
import CardData from '../components/CardData';

const CardPropArray = () =>
{

    function Cardfunc(val){
        console.log(`value is `,val)
        return(
            <div className='Cardstyle'>
            <Cardd
                imgsrc={val.imgsource}
                title={val.Title}
                text={val.Text}
            />
          </div>
        );
    }
    return (
        <>
            <h1 className="heading mx-3 my-4"><b>Our Wonderful Plants</b></h1>
            <p style={{ textAlign: 'center' }}> looking at its layout. The point of using lorem Ipsumletters,as opposed to using!</p>
           
           {CardData.map(Cardfunc)}
        </>
    )
}
export default CardPropArray;