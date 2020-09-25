import React from "react";
import styled from "styled-components";
import media from "../styles/media";

const Wrapper = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 22px;
  text-align: center;

  ${media.smDesktop`
    bottom: 20px;
  `};
`;
const Footer = () => {
  return (
    <Wrapper>
      <a
        href="https://devchallenges.io/profile/Qpz48TS07urevaTXE9OS"
        rel="noopener noreferrer"
        target="_blank"
      >
        Chara- @ Devchallenges.io
      </a>
    </Wrapper>
  );
};

export default Footer;
