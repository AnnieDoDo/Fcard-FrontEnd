import React from 'react'
import Style from '../navbar/navbar.css'
import {Navbar} from "react-bootstrap"
import {Nav} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrow } from '@fortawesome/free-solid-svg-icons'

class NavBar extends React.Component {
    constructor(props){
        super(props);
    };
    render() {
        return (
            <Navbar variant="dark" className = "navbarBackground" >
                <Navbar.Brand>Fcard</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#" >
                        <FontAwesomeIcon icon={faCrow} />
                    </Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default NavBar;