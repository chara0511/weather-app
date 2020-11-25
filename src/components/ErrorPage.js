import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ErrorIcon from '../icons/errorIcon';

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100%;

  & .errorIcon {
    height: 50px;
    width: 50px;
    margin-bottom: 0.5em;
  }
`;

const ErrorPage = ({ message }) => {
  return (
    <StyledContainer>
      <ErrorIcon />
      <h1>{message}</h1>
    </StyledContainer>
  );
};

ErrorPage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorPage;
