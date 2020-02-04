import React from "react";
import { Container, Row, Col } from "reactstrap";
import style from "./style.css";
import ImgBanner from "../../nfl-banner.jpg"

function Banner() {
    return (
        <Container fluid>
            <Row>
                <div id="tempDiv">
                    <img id="banner-img" src={ImgBanner} alt="NFL banner" />
                </div>
            </Row>
            <Row >
                <Col>
                    <h2 className="text-center">Click on an image to earn points, but don't click on any more than once!</h2>
                </Col>

            </Row>
        </ Container>



    );
}

export default Banner;