import React from "react";
import styled from "styled-components";

const StyledMoon = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  margin: 0 auto;
  top: ${({ positiontop }) => (positiontop ? positiontop : 0)};
  left: ${({ positionleft }) => (positionleft ? positionleft : 0)};
  transform: ${({ withrotate }) => (withrotate ? ` scale(0.5)` : "none")};

  & .moon-colour {
    background-color: #cadcfc;
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
  }

  & .moon-mask {
    position: absolute;
    top: -20px;
    left: 35px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #1e213a;
  }
`;
const Moon = ({ positiontop, positionleft, withrotate }) => {
  return (
    <StyledMoon
      positiontop={positiontop}
      positionleft={positionleft}
      withrotate={withrotate}
    >
      <div className="moon-colour"></div>
      <div className="moon-mask"></div>
    </StyledMoon>
  );
};

export default Moon;
