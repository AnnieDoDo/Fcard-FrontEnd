import React from 'react'
import Style from '../navbar/navbar.css'
import {Navbar} from "react-bootstrap"

class NavBar extends React.Component {
    constructor(props){
        super(props);
    };
    render() {
        return (
            <Navbar  variant="light" className = "navbarBackground" >
                <Navbar.Brand>Fcard</Navbar.Brand>
            </Navbar>
        );
    }
}

export default NavBar;