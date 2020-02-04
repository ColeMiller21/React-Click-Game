import React from "react";
import { Container } from "reactstrap";
import "./style.css";

function Wrapper(props) {
    return (
        <Container className="img-area">{props.children} </Container>

    )



}