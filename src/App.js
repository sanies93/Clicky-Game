import React, { Component } from "react";
import images from "./cards.json";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";

// shuffle upon each click
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    images,
    score: 0,
    topScore: 0,
    showAlert: 0,
    showSuccess: 0,
    clickedimages: []
  };

  clickedImage = id => {
    // assign the state of the empty array to a let to be updated
    let clickedimages = this.state.clickedimages;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({
      showAlert: 0
    });

    // if the clicked image has an id of the indexed images
    if (clickedimages.indexOf(id) === -1) {
      // push that id into that id into the array to be stored
      clickedimages.push(id);
      console.log(clickedimages);
      // run the score function
      this.handleIncrement();
      // run the reshuffle function after each click
      this.makeShuffle();
    } else if (this.state.score === 12) {
      // alert player wins
      this.setState({
        showSuccess: 1,
        score: 0,
        clickedimages: []
      });
    } else {
      // alert player loss
      this.setState({
        score: 0,
        clickedimages: []
      });
      console.log("duplicate");
      this.setState({
        showAlert: 1
      });
    }

    if (score > topScore) {
      this.setState({
        topScore: score
      });
    }
  };

  // handleIncrement increases this.state.score by 1
  handleIncrement = () => {
    // setState updates a components states
    this.setState({ score: this.state.score + 1 });
  };

  // shuffle up images
  makeShuffle = () => {
    this.setState({ images: shuffle(images) });
  };

  render() {
    return (
      <div className="container">
        <div
          className="alert alert-danger"
          style={{ opacity: this.state.showAlert }}
        >
          You clicked on this already, try again...
          </div>
        <div
          className="alert alert-success"
          style={{ opacity: this.state.showSuccess }}
        >
          Nice, you didn't click on any duplicates!
          </div>
        <Scoreboard
          title="Cats Clicky Game"
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div className="row">
          {this.state.images.map(image => (
            <Card
              key={image.id}
              id={image.id}
              image={image.image}
              clickedImage={this.clickedImage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;