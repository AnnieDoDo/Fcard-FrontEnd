import React from 'react';
import { NavBar } from '../navbar/navbar.jsx';
import Style from './login.css';
import { Form, Button, Container } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert'
import { LogRegActions } from '../../actions/LogReg.actions.jsx';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    };

    handleChange(e){
        const { name, value } = e.target;
        this.setState({[name]: value});
    }

    handleLogin(){
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    handleRegister(){
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.register(username, password);
        }
    }

    render() {
        const { username, password, submitted } = this.state;

        return (
            <div className="background">
                <NavBar />
                    <div className="background1">

                    </div>
                    <div className="backgroundwhite">
                        <Form>
                            <Form.Group controlId="formBasicEmail" className="emailShiftRight">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="username" value={username||''} onChange={this.handleChange}/>
                                {submitted && !username &&
                                <div className="help-block" className="wordstyle">Email is required</div>
                                }
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" className="passwordShiftRight">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={password||''} onChange={this.handleChange}/>
                                {submitted && !password &&
                                <div className="help-block" className="wordstyle">Password is required</div>
                                }
                            </Form.Group>
                            <Button variant="primary" onClick={this.handleLogin} className="loginShiftRight">
                                Login
                            </Button>
                            <Button variant="secondary" onClick={this.handleRegister} className="registerShiftRight" >
                                Register
                            </Button>
                        </Form>
                    </div>
                    [
                    'danger',
                    'warning',
                    ].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                        This is a {variant} alert—check it out!
                    </Alert>
                    ));
            </div>
        );
    }
}

/*function mapStateToProps(state) {
    const { loggingIn } = state.LogReg;
    return {
        loggingIn: state.LogReg.loggingIn,
    };
}*/

const actionCreators = {
    login: LogRegActions.login,
    logout: LogRegActions.logout,
    register: LogRegActions.register
};

const connectedLoginPage = connect(null, actionCreators)(Login);
export { connectedLoginPage as Login };
