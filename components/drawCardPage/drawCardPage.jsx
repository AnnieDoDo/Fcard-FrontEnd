import React from 'react'
import NavBar from '../navbar/navbar.jsx';
import Style from './drawCardPage.css'
import {Form, Button} from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Pic from './dodo.jpg'


class DrawCardPage extends React.Component {
    constructor(props){
        super(props);
    };
    render() {
        return (
            <div className="background">
                <NavBar />
                    <Container className="containerStyle">
                        <Image 
                            className="imgStyle"
                            src={Pic} thumbnail />
                        <h5>男同學</h5>
                        <h6>國立鸚鵡大學 飛行系</h6>
                        <Button variant="primary" className="buttonStyle">送出邀請</Button>
                    </Container>
            </div>
        );
    }
}

export default DrawCardPage;