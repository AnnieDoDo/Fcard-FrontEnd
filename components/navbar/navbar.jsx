import React from 'react'
import Style from '../navbar/navbar.css'
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrow, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { DrawCardActions } from '../../actions/DrawCard.actions.jsx'
import { LogRegAction } from '../../actions/LogReg.actions.jsx'
import { connect } from 'react-redux';

class NavBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            submitted: false,
        };

        this.handleDrawCard = this.handleDrawCard.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    };

    handleDrawCard(){
        this.setState({ submitted: true });
        this.props.DrawCard();
    }

    handleLogout(){
        this.setState({ submitted: true });
        this.props.logout();
    }

    handleLogin(){
        this.setState({ submitted: true });
        this.props.turnToLoginPage();
    }

    render() {
        const { submitted } = this.state;
        const { loggedIn } = this.props
        return (
            <Navbar variant="dark" className="navbar" >
                <Navbar.Brand>Fcard</Navbar.Brand>
                <Nav className="ml-auto">
                    { loggedIn && <FontAwesomeIcon icon={faCrow} onClick={this.handleDrawCard} className="iconstyle" /> }
                    { loggedIn && <FontAwesomeIcon icon={faSignOutAlt} onClick={this.handleLogout} className="iconstyle" /> }
                    { !loggedIn && <FontAwesomeIcon icon={faSignInAlt} onClick={this.handleLogin} className="iconstyle" /> }
                </Nav>
            </Navbar>
        );
    }
}

function mapState(state) {
    const { loggedIn } = state.LogReg;
    return { loggedIn };
}

const actionCreators = {
    DrawCard: DrawCardActions.DrawCard,
    logout: LogRegAction.logout,
    turnToLoginPage: LogRegAction.turnToLoginPage,
};

const connectedNavBar = connect(mapState, actionCreators)(NavBar);
export { connectedNavBar as NavBar };
