import React from "react";
import "./style.css";
import Media from 'react-bootstrap/Media';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Container from 'react-bootstrap/Container';

//import Col from "../Col";
//import Container from "../Container";
//import Row from "../Row";

function ImageCard(props) {

  return (

    <ul className="card list-unstyled">
      <ul className="img-container">
      
      <Media as="li">
      
      <span onClick={() => props.shuffleImages(props.id)} className="reshuffle" > 
          <img alt={props.name} src= {props.image} />
      </span>
      </Media>
      
      
      </ul>
    </ul>
   
  );
}

export default ImageCard;
