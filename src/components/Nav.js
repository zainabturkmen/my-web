// Nav.js
import React, { useState } from "react";
import styled from "styled-components";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaProjectDiagram,
  FaEnvelope,
  FaTimes,
  FaBars,
} from "react-icons/fa";

export const Nav = () => {
  const [active, setActive] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleNavClick = (id) => {
    setActive(`#${id}`);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Wrapper>
      <nav>
        <ul>
          <div className="menu-btn" onClick={toggleNavbar}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
          <li>
            <a
              href="#home"
              className={active === "#home" ? "active" : ""}
              onClick={() => handleNavClick("home")}>
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={active === "#services" ? "active" : ""}
              onClick={() => handleNavClick("services")}>
              <FaServicestack /> Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={active === "#about" ? "active" : ""}
              onClick={() => handleNavClick("about")}>
              <FaInfoCircle /> About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={active === "#projects" ? "active" : ""}
              onClick={() => handleNavClick("projects")}>
              <FaProjectDiagram /> Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={active === "#contact" ? "active" : ""}
              onClick={() => handleNavClick("contact")}>
              <FaEnvelope /> Contact
            </a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 5em;
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff; /* Set background color to white */
    display: flex;
    justify-content: center;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 10px 0;

    .menu-btn {
      display: none;
    }

    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 20px;

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
      }

      li {
        a {
          color: #333; /* Improved color contrast */
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 20px; /* Increased font size */
          padding: 10px 15px;
          border-radius: 5px;
          transition: color 0.3s, background-color 0.3s;

          &.active,
          &:hover {
            color: #000; /* Change active and hover color */
            background-color: #ddd; /* Change background color on hover */
          }
        }
      }
    }
  }

  @media screen and (min-width: 700px) {
    .sidebar {
      display: none;
    }
  }
`;
