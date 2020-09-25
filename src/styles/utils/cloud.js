import React from "react";
import styled, { css, keyframes } from "styled-components";
import { theme } from "..";

const { colors } = theme;

const cloudAnimation = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% {
    opacity: 0;
    transform: translate(-100%, 0px);
  }
`;

const StyledCloud = styled.div`
  height: 100px;
  position: absolute;
  width: 100px;
  z-index: ${({ zindex }) => (zindex ? 6 : 0)};
  top: ${({ positiontop }) => (positiontop ? positiontop : "auto")};
  right: ${({ positionright }) => (positionright ? positionright : "auto")};
  left: ${({ positionleft }) => (positionleft ? positionleft : "auto")};
  bottom: ${({ positionbottom }) => (positionbottom ? positionbottom : "auto")};

  & .bg {
    border-radius: 50% 50% 10% 0;
    background-color: ${({ night }) =>
      night ? `${colors.cloudNight}` : `${colors.white}`};
    height: ${({ withsizes }) => (withsizes ? withsizes : "100%")};
    left: ${({ withsizes }) => (withsizes ? "-10%" : "8%")};
    position: absolute;
    top: ${({ withsizes }) => (withsizes ? "30%" : "auto")};
    width: ${({ withsizes }) => (withsizes ? withsizes : "100%")};
    opacity: 1;
    transform: ${({ animated }) =>
      animated ? "translate(200%, 0px)" : "none"};

    animation-name: ${({ animated }) =>
      animated
        ? css`
            ${cloudAnimation}
          `
        : "none"};
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.15);

    &:before,
    &:after {
      content: "";
      border-radius: 50%;
      position: absolute;
    }

    &:before {
      background-color: ${({ night }) =>
        night ? `${colors.cloudNight}` : `${colors.white}`};
      bottom: 0;
      height: 65%;
      left: -35%;
      width: 65%;
      z-index: 2;
    }

    &:after {
      background-color: ${({ night }) =>
        night ? `${colors.cloudNight}` : `${colors.white}`};
      bottom: 0;
      height: 50%;
      right: -20%;
      width: 50%;
    }
  }
`;

const Cloud = ({
  animated,
  night,
  positionbottom,
  positionleft,
  positionright,
  positiontop,
  withsizes,
  zindex,
}) => {
  return (
    <StyledCloud
      animated={animated}
      night={night}
      positionbottom={positionbottom}
      positionleft={positionleft}
      positionright={positionright}
      positiontop={positiontop}
      withsizes={withsizes}
      zindex={zindex}
    >
      <div className="bg"></div>
    </StyledCloud>
  );
};

export default Cloud;
