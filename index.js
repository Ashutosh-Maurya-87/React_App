import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardd from './components/card.js';
import plant1 from './imeges/plant1.jpg';
import plant2 from './imeges/plant2.jpg';
import plant3 from './imeges/plant3.jpg';
import pic from './imeges/pic.jpg';
import gallery,{ pics } from './components/gallery';

ReactDOM.render(
  <>
    <App />
    
<ol>
  <li>
    {gallery}
  </li>
  <li>
    {pics}
  </li>
</ol>
    </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
