import React, { Component } from "react";
import ImageCard from "./Components/ImageCard";
import Wrapper from "./Components/Wrapper";
import Title from "./Components/Title";
import images from "./images.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Shadow Hunter Clicky Game!</Title>
        {this.state.images.map(images => (
          <ImageCard
            id={images.id}
            key={images.id}
            image={images.image}  
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;