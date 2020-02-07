import React, { Component } from 'react';
import { Container, Row } from "reactstrap";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Wrapper from "./components/Wrapper/Wrapper";
import Image from "./components/ImageDiv/Image";
import images from "./images.json"
import './App.css';



class App extends Component {

  state = {
    images,
    pickedImages: [],
    counter: 0,
    highScore: 0
  }

  playGame = key => {
    // if pickedImages includes the image key ending game emptying out the pickedImages array
    if (this.state.pickedImages.includes(key) === true || this.state.counter === 12) {
      this.gameOver();
      this.setState({ pickedImages: [] })
    }
    else {
      // setting the coutner + 1 everytime a number is clicked
      this.setState({ counter: this.state.counter + 1 });
      // shuffling the images array after click
      this.arrShuffle(this.state.images)
      // pushing the image key into pickedImages array
      this.state.pickedImages.push(key);

      console.log(this.state.pickedImages)
    }

  }

  //functin to reset the game
  gameOver = () => {
    // if the counter is higher than highScore setting highScore equal to counter
    if (this.state.counter > this.state.highScore) {
      this.setState({ highScore: this.state.counter, counter: 0 })
    }
    else {
      // looping over all images and making beenClicked equal to false 
      this.state.images.forEach(image => image.beenClicked = false)
      this.setState({ counter: 0 })
    }
  }


  // Function that shuffles an array
  arrShuffle = array => {
    // This is for shuffling the false questions chosen
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
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
                image={image.image}
                onClick={() => this.playGame(image.key)} />
            )}
          </Wrapper>
        </Container>
      </div>
    );
  }
}

export default App;
