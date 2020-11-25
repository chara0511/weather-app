import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const animation = keyframes`
 0% {
    box-shadow: 0px 0px 5px 2.5px yellow;
  }
  70% {
    box-shadow: 0px 0px 15px 5px gold;
  }
  100% {
    box-shadow: 0px 0px 25px 7.5px yellow;
  }
`;

const StyledSun = styled.div`
  width: 100px;
  height: 100px;
  margin-left: ${({ marginleft }) => marginleft || 0};

  & .sun {
    background: #ffec65;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: relative;
    z-index: 5;
    animation: ${({ animated }) =>
      animated
        ? css`
            ${animation}
          `
        : 'none'};
    animation-duration: 4s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }

  & .transparent {
    position: absolute;
    top: -6%;
    left: -6%;
    width: 112%;
    height: 112%;
    border-radius: 50%;
    background: #1e213a;
    z-index: 4;
  }

  & .sun-crown {
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    border-radius: 50%;
    background: #938f1f;
    z-index: 3;
  }

  & .transparent2 {
    position: absolute;
    top: -15%;
    left: -15%;
    width: 130%;
    height: 130%;
    border-radius: 50%;
    background: #1e213a;
    z-index: 2;
  }

  & .sun-crown2 {
    position: absolute;
    top: -18%;
    left: -18%;
    width: 136%;
    height: 136%;
    border-radius: 50%;
    background: #49492f;
    z-index: 1;
  }
`;

const StyledContainer = styled.div`
  width: ${({ withsizes }) => withsizes || '100%'};
  height: ${({ withsizes }) => withsizes || '100%'};
  position: relative;
`;

const Sun = ({ withsizes, marginleft, animated }) => {
  return (
    <StyledSun marginleft={marginleft} animated={animated}>
      <StyledContainer withsizes={withsizes}>
        <div className="sun" />
        <div className="transparent" />
        <div className="sun-crown" />
        <div className="transparent2" />
        <div className="sun-crown2" />
      </StyledContainer>
    </StyledSun>
  );
};

Sun.propTypes = {
  animated: PropTypes.bool,
  marginleft: PropTypes.string,
  withsizes: PropTypes.string,
};

export default Sun;
