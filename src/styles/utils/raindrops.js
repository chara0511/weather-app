import styled from "styled-components";

const Raindrops = styled.div`
  .raindrop {
    width: 6px;
    background: #a3d9f1;
    transform: rotate(15deg);
    z-index: 6;
    border-radius: 5px;
  }

  .raindrop {
    position: absolute;

    &:nth-of-type(1) {
      top: 110px;
      left: 20px;
      height: 36px;
    }

    &:nth-of-type(2) {
      top: 110px;
      left: 35px;
      height: 48px;
    }

    &:nth-of-type(3) {
      top: 110px;
      left: 50px;
      height: 60px;
    }

    &:nth-of-type(4) {
      top: 110px;
      right: 43px;
      height: 36px;
    }

    &:nth-of-type(5) {
      top: 110px;
      right: 30px;
      height: 48px;
    }

    &:nth-of-type(6) {
      top: 110px;
      right: 12px;
      height: 24px;
    }
  }
`;

export default Raindrops;
