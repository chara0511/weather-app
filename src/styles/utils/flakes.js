import React from "react";
import styled, { keyframes } from "styled-components";

const animation = keyframes`

  100% { transform: rotate(360deg); }

`;

const StyledFlakes = styled.div`
  width: 100px;
  height: 100px;
  float: left;
  position: relative;
  animation: ${animation} 12s linear infinite;
  margin-top: 15%;
  z-index: 6;

  & .a,
  & .b,
  & .c {
    width: 100%;
    height: 6px;
    background-color: #b3b3b3;
    position: absolute;
    top: 50%;
    left: 0;

    & .lu,
    & .ru,
    & .lo,
    & .ro {
      height: 6px;
      width: 22px;
      background-color: inherit;
    }

    & .lu {
      margin-top: 9%;
      margin-left: 5%;
      background-color: inherit;
      transform: rotate(-60deg);
    }

    & .ru {
      margin-top: -24%;
      margin-left: 5%;
      background-color: inherit;
      transform: rotate(60deg);
    }

    & .lo {
      margin-top: -6%;
      margin-left: 75%;
      background-color: inherit;
      transform: rotate(-60deg);
    }

    & .ro {
      margin-top: 12%;
      margin-left: 75%;
      background-color: inherit;
      transform: rotate(60deg);
    }
  }

  & .b {
    transform: rotate(60deg);
  }

  & .c {
    transform: rotate(-60deg);
  }
`;

const Flakes = () => {
  return (
    <StyledFlakes>
      <div className="a">
        <div className="lu"></div>
        <div className="ru"></div>
        <div className="lo"></div>
        <div className="ro"></div>
      </div>
      <div className="b">
        <div className="lu"></div>
        <div className="ru"></div>
        <div className="lo"></div>
        <div className="ro"></div>
      </div>
      <div className="c">
        <div className="lu"></div>
        <div className="ru"></div>
        <div className="lo"></div>
        <div className="ro"></div>
      </div>
    </StyledFlakes>
  );
};

export default Flakes;
