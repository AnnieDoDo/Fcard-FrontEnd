import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './helpers/store.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/mainpage/mainpage.jsx'
import { Login } from './components/login/login.jsx';
import { DrawCardPage } from './components/drawCardPage/drawCardPage.jsx';
import { ConnectedRouter } from 'connected-react-router'
import { history } from './helpers/history.jsx'

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path={process.env.PUBLIC_URL +"/login"} component={Login} />
                <Route path={process.env.PUBLIC_URL +"/mainpage"} component={MainPage} />
                <Route path={process.env.PUBLIC_URL +"/drawcardpage"} component={DrawCardPage} />
            </Switch>
        </ConnectedRouter>
    </Provider>
, document.getElementById('root'));