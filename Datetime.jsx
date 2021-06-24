import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { useLocation } from 'react-router-dom';

const Datetime = ()=>
{
    

const loc = useLocation();
    const check = loc.pathname.includes('admin');

    const [month, setMonth] = useState('');
    const [ampm, setMean] = useState(" ");
    const [greet, setGreet] = useState(" ");
    const [sec, setState] = useState(" ");
    let navDate = new Date();
    let navMonDate = navDate.getDate();
    let navMon = navDate.getMonth();
    let navYer = navDate.getFullYear();
    let weekDays = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday']
    let navDay = navDate.getDay(); 
    let navHour = navDate.getHours();
    let navMin= navDate.getMinutes();
    let navSec=navDate.getSeconds();

  
    console.log(`day ${navMonDate} month ${navMon} navYer ${navYer} navHour ${navHour} navMinute ${navMin} navSecond ${navSec} ${ampm}`)
    React.useEffect(()=>{
    if(navHour>12){
        setMean(`PM`);
    }else{
        setMean(`AM`);
    }
},[navHour]);
React.useEffect(()=>{

    // setInterval(() => setState({ navSec:navDate.getSeconds() `${sec}` }), 1000);
      
        if(navHour<12)
{
    setGreet(`Good Morning`) 
}else if(navHour==12 && navHour<=15)
{
    setGreet(`Good AfterNoon`);
}else if(navHour>15 && navHour<20)
{
    setGreet(`Good Evening`);
}else if(navHour>20 && navHour<24)
{
    setGreet(`Good Night`);
}
},[navHour]);
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
    }, [navMon]);
    return (

    )
}

    console.log(`nnnnnnnn ${month}`)