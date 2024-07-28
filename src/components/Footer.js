// Footer.js
import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="social-links">
        <a
          href="www.linkedin.com/in/zainab-turkmen-719183271"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/ZainabTurkmen"
          target="_blank"
          rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a
          href="https://github.com/zainabturkmen"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
  }

  .social-links {
    display: flex;
    gap: 20px;

    a {
      color: #fff;
      font-size: 24px;
      transition: color 0.3s;

      &:hover {
        color: #007bff;
      }
    }
  }
`;

export default Footer;
