import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 30px;
  height: 30px;
  background-color: rgb(245, 164, 37,0.6);
  opacity: 0.7;
  position: absolute;
  top: 0px;
  left: -60px;
  z-index: 0;
  animation: square 15s linear alternate infinite;

  @keyframes square {
    to {
      transform: translate(50vw, 50vh);
    }
  }
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #F5A425;
  opacity: 0.65;
  position: absolute;
  top: 80vh;
  left: 50vw;
  z-index: 0;
  animation: circle 15s linear alternate infinite;

  @keyframes circle {
    to {
      transform: translate(40vw, -50vh);
    }
  }
  @media only screen and (max-width:500px){
    animation: circle 10s linear alternate infinite;
    @keyframes circle {
    to {
      transform: translate(30vw, -40vh);
    }
  }
  }
`;

const Circle2 = styled.div`
  width: 40px;
  height: 40px;
  background-color: #212529;
  opacity: 0.5;
  position: absolute;
  top: 400px;
  left: -50px;
  z-index: 0;
  animation: circle2 20s linear alternate infinite;

  @keyframes circle2 {
    to {
      transform: translate(95vw, -50vh);
    }
  }
`;

const AnimatedShapes = () => {
  return (
    <>
      <Square />
      <Circle />
      <Circle2 />
    </>
  );
};

export default AnimatedShapes;