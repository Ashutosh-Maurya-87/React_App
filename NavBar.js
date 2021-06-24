import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Nav, Button, FormControl, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbaar = () => {
    const loc = useLocation();
    const check = loc.pathname.includes('admin');
    // const chek1 = loc.pathname.includes(`${day}`);

    const [month, setMonth] = useState('');
    const [ampm, setMean] = useState(" ");
    const [greet, setGreet] = useState(" ");
    const [day, setDay] = useState(" ");
    let navDate = new Date();
    let navSec = navDate.getSeconds();
    const [sec, setSec] = useState(navSec);
    let navMonDate = navDate.getDate();
    let navMon = navDate.getMonth();
    let navYer = navDate.getFullYear();
    // let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let navDay = navDate.getDay();
    React.useEffect(() => {
        switch (navDay) {
            case 0:
                setDay(`Sunday`);
                break;
            case 1:
                setDay(`Monnday`);
                break;
            case 2:
                setDay(`Tuesday`)
                break;
            case 3:
                setDay(`Wednesday`)
                break;
            case 4:
                setDay(`Thursday`)
                break;
            case 5:
                setDay(`Friday`)
                break;
            case 6:
                setDay(`Saturday`)
                break;
            default :
                setDay(`NOT a DDAy`)
                break;
        }
    }, [navDay])
// console.log(`day are: ${navDay}`);
    let navHour = navDate.getHours();
    let navMin = navDate.getMinutes();


    React.useEffect(() => {
        if (navHour >= 12 && navMin >0) {
            setMean(`PM`);
        } else {
            setMean(`AM`);
        }
    }, [navHour]);
    React.useEffect(() => {
        // console.log(`secsonds ${sec}`)
        setTimeout(() => setSec(sec + 1), 1000);
        // console.log(`secsonds interval ${sec}`)

        if (navHour < 12) {
            
            setGreet(`(Good Morning)`)
        } else if (navHour == 12 && navHour <= 15) {
            setGreet(`(Good AfterNoon)`);
        } else if (navHour >= 15     && navHour < 21) {
            setGreet(`(Good Evening)`);
        } else if (navHour >= 21 && navHour < 24) {
            setGreet(`(Good Night)`);
        }
    }, [navHour]);
    React.useEffect(() => {
        switch (navMon) {
            case 0:
                setMonth(`January`);
                break;
            case 1:
                setMonth(`February`);
                break;
            case 2:
                setMonth(`March`);
                break;
            case 3:
                setMonth(`April`);
                break;
            case 4:
                setMonth(`May`);
                break;
            case 5:
                setMonth(`June`);
                break;
            case 6:
                setMonth(`July`);
                break;
            case 7:
                setMonth(`August`);
                break;
            case 8:
                setMonth(`September`);
                break;
            default:
                setMonth('not month');
                break;
        }
    }, [navMon, sec
    ]);

    // console.log(`Month are: ${month}`)
    return (
        <>
            <Navbar bg='light' variant="black" className="back" style={{ height: "10rem",width:'100%' }} >
                <Navbar.Brand href="#home" style={{ color: "green" }} >GREENO</Navbar.Brand>
                <Nav className="mr-auto" id='navitem'>
                    <Nav.Link ><Link to='/' style={{ textDecoration: 'none', hoverColour: 'green' }}> Home </Link></Nav.Link>
                    <Nav.Link ><Link to='About' style={{ textDecoration: 'none', hoverColour: 'green' }}> About</Link> </Nav.Link>
                    <Nav.Link><Link to='FetchApi' style={{ textDecoration: 'none', hoverColour: 'green' }}>API</Link></Nav.Link>
                    <Nav.Link ><Link to='Gallery' style={{ textDecoration: 'none', hoverColour: 'green' }}>Gallery</Link></Nav.Link>
                    <Nav.Link> <Link to='Contact' style={{ textDecoration: 'none', hoverColour: 'green' }}> Contact Us </Link>   </Nav.Link>
                    <h4 style={{ marginLeft: "20px" }}>Welcome</h4> &nbsp; <h4 style={{ color: check ? 'red' : 'blue' }}> {check ? 'Admin ' : " User"}</h4>
                    {/* 02-June-2021 Tuesday 10:08 PM (Good Night) */}
                    <h5 style={{ marginLeft: '20px'}}> {navMonDate}-{month}-{navYer} {day} {navHour}:{navMin} {ampm} {greet}  </h5>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        </>
    )
}
export default Navbaar;
