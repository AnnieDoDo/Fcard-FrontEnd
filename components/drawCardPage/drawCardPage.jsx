import React from 'react'
import { NavBar } from '../navbar/navbar.jsx';
import Style from './drawCardPage.css'
import {Form, Button} from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import Pic from './dodo.jpg'
import { connect } from 'react-redux';
import { DrawCardActions } from '../../actions/DrawCard.actions.jsx'


class DrawCardPage extends React.Component {
    constructor(props){
        super(props);
    };

    componentDidMount() {
        this.props.GetPersonalData();
    }
    render() {
        const { pdata } = this.props;
        return (
            <div className="background">
                <NavBar />
                    <Container className="containerStyle">
                        <Image 
                            className="imgStyle"
                            src={Pic} thumbnail />
                        <h5>{pdata ? pdata.Gender : ""}同學</h5>
                        <h6>{pdata ? pdata.School : ""} {pdata ? pdata.Department : ""}</h6>
                        <Button variant="primary" className="buttonStyle">送出邀請</Button>
                        <ListGroup variant="flush">
                            <Container >
                                <ListGroup.Item>
                                    <div className="descriptionWordColor">專長與興趣</div>
                                    <div className="contentWordColor">{pdata ? pdata.SkillDescription : ""}</div>
                                </ListGroup.Item>
                            </Container>
                            <Container >
                                <ListGroup.Item>
                                    <div className="descriptionWordColor">曾參加過的社團</div>
                                    <div className="contentWordColor">{pdata ? pdata.ClubDescription : ""}</div>
                                </ListGroup.Item>
                            </Container>
                            <Container >
                                <ListGroup.Item>
                                    <div className="descriptionWordColor">喜歡的課</div>
                                    <div className="contentWordColor">{pdata ? pdata.ClassDescription : ""}</div>
                                </ListGroup.Item>
                            </Container>
                            <Container >
                                <ListGroup.Item>
                                <div className="descriptionWordColor">喜歡的國家</div>
                                <div className="contentWordColor">{pdata ? pdata.CountryDescription : ""}</div>
                                </ListGroup.Item>
                            </Container>
                            <Container >
                                <ListGroup.Item>
                                    <div className="descriptionWordColor">自己最近的困擾</div>
                                    <div className="contentWordColor">{pdata ? pdata.ObsessionDescription : ""}</div>
                                </ListGroup.Item>
                            </Container>
                            <Container >
                                <ListGroup.Item>
                                    <div className="descriptionWordColor">可以交換學習的才藝</div>
                                    <div className="contentWordColor">{pdata ? pdata.TalentDescription : ""}</div>
                                </ListGroup.Item>
                            </Container>
                            <Container >
                                <ListGroup.Item>
                                    <div className="descriptionWordColor">想嘗試的事情</div>
                                    <div className="contentWordColor">{pdata ? pdata.WannatryDescription : ""}</div>
                                </ListGroup.Item>
                            </Container>
                        </ListGroup>
                    </Container>
            </div>
        );
    }
}

function mapState(state) {
    const { pdata } = state.DrawCard;
    return { pdata };
}

const actionCreators = {
    GetPersonalData: DrawCardActions.GetPersonalData,
};

const connectedDrawCardPage = connect(mapState, actionCreators)(DrawCardPage);
export { connectedDrawCardPage as DrawCardPage };
