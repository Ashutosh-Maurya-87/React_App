import { Button, Modal, Form } from 'react-bootstrap';
import React, { useState } from 'react';

const Contact = () => {
    const [see, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (e) =>{
        e.preventDefault();
         setShow(true);
        }
        
    return (
        <>
            <Form>
                <div className='input' style={{ textAlign: "center" }}>
                    <h4 className=" heading" style={{ backgroundColor: "orange", height: "3rem" }}>User Login Page</h4><br /><br />
    Enter the First Name: <input type='text' /><br></br><br></br>
    Enter the Last Name:  <input type='text' /><br></br><br></br>
    Enter Your E-mail Id: <input type='e-mail' /><br></br><br></br>
    Enter Your Contact NO:<input type='number' /><br></br><br></br>
                    <button onClick={handleShow}>submit</button>
                </div>
            </Form>
            <Modal show={see} onclick={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Entered data are:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onclick={handleClose}>Save changes</Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}
export default Contact;