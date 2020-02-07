import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./style.css"




function Header(props) {
    return (
        <Container fluid className="header fixed-top">
            <Row>
                <Col ><h3 id="logo" className="text-center text">NFL Click!</h3></Col>
                <Col><h3 id="scores" className="text-center text">Score: {props.counter} |  Top Score: {props.highScore} </h3></Col>
            </Row>
        </ Container>
    );
}

export default Header;