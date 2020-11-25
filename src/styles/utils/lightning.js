import styled from 'styled-components';

const Lightning = styled.div`
  height: 100px;
  position: relative;
  width: 100px;

  &:before {
    content: '';
    background: #ffd632;
    height: 40%;
    right: -5%;
    top: 32%;
    transform: skew(-20deg);
    width: 30%;
    position: absolute;
    z-index: 7;
  }

  &:after {
    content: '';
    border-right: 2em solid transparent;
    border-top: 3em solid #ffd632;
    bottom: -10%;
    right: -15%;
    transform: skew(-15deg);
    letter-spacing: 0;
    position: absolute;
    width: 30%;
    height: 40%;
    z-index: 7;
  }
`;

export default Lightning;
