import React from 'react'
import NavBar from '../navbar/navbar.jsx';
import Style from './login.css'
import {Form, Button} from "react-bootstrap"


class Login extends React.Component {
    constructor(props){
        super(props);
    };
    render() {
        return (
            <div className="background">
                <NavBar />
                    <div className="backgroundwhite">
                        <Form>
                            <Form.Group controlId="formBasicEmail" className = "emailShiftRight">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" className = "passwordShiftRight">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className = "loginShiftRight">
                                Login
                            </Button>
                            <Button variant="secondary" type="submit" className = "registerShiftRight" >
                                Register
                            </Button>
                        </Form>
                    </div>
            </div>
        );
    }
}

export default Login;