import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import './App.css';

class App extends Component {


  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Header />
          </Row>
          <Row>
            <Banner />
          </Row>
        </Container>




        <Row>
          <Col className="text-center"> 1 </Col>
          <Col> 2 </Col>
          <Col> 3 </Col>
          <Col> 4 </Col>
        </Row>
      </div>
    );
  }
}

export default App;
