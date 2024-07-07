// Footer.js
import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString();

  return (
    <FooterContainer>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <div className="date">
        &copy; {currentYear} | {currentDate}
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 768px) {
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
        color: #69d1ee;
      }
    }
  }

  .date {
    font-size: 14px;
    color: #ccc;
  }
`;

export default Footer;
