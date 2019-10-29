import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './helpers/store.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/mainpage/mainpage.jsx'
import {Login} from './components/login/login.jsx';
import DrawCardPage from './components/drawCardPage/drawCardPage.jsx';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/mainpage" component={MainPage} />
                <Route path="/drawcardpage" component={DrawCardPage} />
            </Switch>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));