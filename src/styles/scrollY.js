import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from './theme';

const { colors, shadows } = theme;

const StyledContainer = styled.div`
  height: ${(props) => (props.withHeight ? props.withHeight : 'auto')};
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.grey};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    &:hover,
    &:active {
      background-color: ${colors.grayish};
      box-shadow: ${shadows.scroll};
    }
  }

  &::-webkit-scrollbar-track {
    background-color: ${colors.white};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    &:hover,
    &:active {
      background: ${colors.lightGrey};
    }
  }
`;

const ScrollY = ({ withHeight, children }) => {
  return <StyledContainer withHeight={withHeight}>{children}</StyledContainer>;
};

ScrollY.propTypes = {
  withHeight: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
export default ScrollY;
