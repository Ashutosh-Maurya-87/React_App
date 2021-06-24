import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Frontpage from './Pages/FrontPage.js';
import Admin from './components/Admin';
import User from './components/User.js';

import Contact from './components/Contact';
import About from './components/about';
import FetchApi from './components/FetchApi';
function App() {
  return (
    <>
    

    <BrowserRouter>
    <Switch>
        <Route  exact path='/' component={Frontpage} ><Frontpage /></Route>
        <Route path='/admin' component={Frontpage}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/fetchapi' component ={FetchApi}></Route>
    </Switch>
</BrowserRouter>
    </>
    
  );
}

export default App;
