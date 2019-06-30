import React, { Component } from "react";
import ImageCard from "./Components/ImageCard";
import Wrapper from "./Components/Wrapper";
import Title from "./Components/Title";
import images from "./images.json";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images
  };
//PseudoCode
//image is clicked
//images are randomly reshuffled
//user clicks again another image after the reshuffling
//if the image is the same as the one before the shuffle
//end the round 
//leave the score printed 
//on click again the scoring restarts

shuffleImages = id => function($){
 
  $.fn.shuffle = function() {

      let images = this.get(),
          getRandom = function(max) {
              return Math.floor(Math.random() * max);
          },
          shuffled = $.map(images, function(){
              var random = getRandom(images.length),
                  randEl = $(images[random]).clone(true)[0];
              images.splice(random, 1);
              return randEl;
         });

      this.each(function(i){
          $(this).replaceWith($(shuffled[i]));
      });

      return $(shuffled);

  };
this.setState({ images });
};

//**** */Scoreboard needs to be added\* ****
//When an image with the same ID is clicked, the game is exited (revisit Word Guess Game)
//With each click of an image, if it is not the same as before, the score increments by 1
//The game continues util the user clicks an image with an ID that they hit before


  // Map over this.state.images and render an ImageCard component for each image object
  render() {

    return (
      
      <Wrapper>
        <Title> Shadow Hunter Clicky Game! </Title>

        
        
        {this.state.images.map(images => (
            <ImageCard
            shuffleImages={this.shuffleImages}
            id={images.id}
            key={images.id}
            image={images.image}  
          />
        ))}
      </Wrapper>
    )}
        }

export default App;