import React from 'react';
import NavBar from '../navbar/navbar.jsx';
import Style from './login.css';
import { Form, Button} from "react-bootstrap";
import { LogRegActions } from '../../actions/LogReg.actions.jsx';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }
    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;

        return (
            <div className="background">
                <NavBar />
                    <div className="backgroundwhite">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail" className = "emailShiftRight">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="username" value={username} onChange={this.handleChange}/>
                                {submitted && !username &&
                                <div className="help-block">Email is required</div>
                                }
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" className = "passwordShiftRight">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange}/>
                                {submitted && !password &&
                                <div className="help-block">Password is required</div>
                                }
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

function mapStateToProps(state) {
    const { loggingIn } = state.LogReg;
    return { loggingIn };
}

const actionCreators = {
    login: LogRegActions.login,
    logout: LogRegActions.logout
};

const connectedLoginPage = connect(mapStateToProps, actionCreators)(Login);
export { connectedLoginPage as Login };
