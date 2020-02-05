import React, { Component } from 'react';
import { Container, Row } from "reactstrap";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import Image from "./components/ImageDiv/Image";
import images from "./images.json"

import './App.css';



class App extends Component {

  state = {
    images,
    counter: 0,
    highScore: 0
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Header
              counter={this.state.counter}
              highScore={this.state.highScore} />
          </Row>
          <Row>
            <Banner />
          </Row>
          <Wrapper>
            {this.state.images.map(image =>
              <Image
                key={image.key}
                image={image.image} />
            )}
          </Wrapper>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
