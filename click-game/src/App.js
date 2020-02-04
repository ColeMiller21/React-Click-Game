import React, { Component } from 'react';
import { Container, Row } from "reactstrap";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
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
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
