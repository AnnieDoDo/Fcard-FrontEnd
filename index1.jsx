import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/mainpage/mainpage.jsx'
import Login from './components/login/login.jsx';
import DrawCardPage from './components/drawCardPage/drawCardPage.jsx';

ReactDOM.render(
    <DrawCardPage />
, document.getElementById('root'));