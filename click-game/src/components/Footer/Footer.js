import React from "react";
import { Container } from "reactstrap";
import "./style.css"




function Footer() {
    return (
        <Container fluid className="footer">
            <nav className="navbar-fixed-bottom text-center">
                <div>
                    <h3 className="center">React Click Game</h3>
                </div>
            </nav>
        </ Container>
    );
}

export default Footer;