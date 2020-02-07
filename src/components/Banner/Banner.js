import React from "react";
import { Container, Row } from "reactstrap";
import "./style.css";


function Banner() {
    return (
        <Container fluid>
            <Row>
                <div id="banner-img">
                    <div className="img-text text-center">
                        <h1 className="title">NFL Click Game!</h1>
                        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
                    </div>
                </div>

            </Row>
        </ Container>
    );
}

export default Banner;