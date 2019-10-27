import React from 'react'
import Style from '../navbar/navbar.css'
import {Navbar} from "react-bootstrap"
import {Nav} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrow } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props){
        super(props);
    };
    render() {
        return (
            <Navbar variant="dark" className="navbar" >
                <Navbar.Brand>Fcard</Navbar.Brand>
                <Nav className="ml-auto">
                    <NavLink to="/drawcardpage" className="navlink" >
                        <FontAwesomeIcon icon={faCrow} />
                    </NavLink>
                </Nav>
            </Navbar>
        );
    }
}

export default NavBar;