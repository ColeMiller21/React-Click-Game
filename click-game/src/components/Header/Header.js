import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./style.css"




function Header() {
    return (
        <Container fluid className="header position-sticky">
            <Row>
                <Col ><h3 id="logo" className="text-center center">NFL Click!</h3></Col>
                <Col><h3 id="headline" className="text-center center">Click an image to begin!</h3></Col>
                <Col><h3 id="scores" className="text-center center">Score: 0  |  Top Score: 0</h3></Col>
            </Row>
        </ Container>
    );
}

export default Header;