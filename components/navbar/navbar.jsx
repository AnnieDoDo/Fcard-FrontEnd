import React from 'react'
import Style from '../navbar/navbar.css'
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrow, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { DrawCardActions } from '../../actions/DrawCard.actions.jsx'
import { LogRegActions } from '../../actions/LogReg.actions.jsx'
import { connect } from 'react-redux';

class NavBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            submitted: false
        };

        this.handleDrawCard = this.handleDrawCard.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    };

    handleDrawCard(){
        this.setState({ submitted: true });
        this.props.DrawCard();
    }

    handleLogout(){
        this.setState({ submitted: true });
        this.props.logout();
    }

    render() {
        const { submitted } = this.state;
        return (
            <Navbar variant="dark" className="navbar" >
                <Navbar.Brand>Fcard</Navbar.Brand>
                <Nav className="ml-auto">
                    <FontAwesomeIcon icon={faCrow} onClick={this.handleDrawCard} className="iconstyle" />
                    <FontAwesomeIcon icon={faSignOutAlt} onClick={this.handleLogout} className="iconstyle" />
                </Nav>
            </Navbar>
        );
    }
}


const actionCreators = {
    DrawCard: DrawCardActions.DrawCard,
    logout: LogRegActions.logout
};

const connectedNavBar = connect(null, actionCreators)(NavBar);
export { connectedNavBar as NavBar };
