import React from 'react';
import { Card } from 'react-bootstrap';

const Cardd = (props) => {
    // console.log(props);
    return (
        <>
                <Card className="card1  my-5" >
                    <Card.Img variant="top" src={props.imgsrc} />
                    <Card.Body>
                        <Card.Title><h2 className='title'>{props.title}</h2></Card.Title>
                        <Card.Text className='text'>
                            {props.text}
                        </Card.Text>
                    </Card.Body>
                </Card>
        </>
    )

}
export default Cardd;