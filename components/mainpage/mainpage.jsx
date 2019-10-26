import React from 'react'
import NavBar from '../navbar/navbar.jsx';
import Style from './mainpage.css'
import {Form, Button} from "react-bootstrap"


class Login extends React.Component {
    constructor(props){
        super(props);
    };
    render() {
        return (
            <div className="background">
                <NavBar />
            </div>
        );
    }
}

export default Login;