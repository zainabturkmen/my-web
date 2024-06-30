import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "./Sidebar";
import links from "./data";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Wrapper>
      <div className="navbar">
        <div className="logo-and-toggle-div">
          <div className="logo">
            <img src={logo} alt="Zainab logo" />
          </div>
          <button className="sidebar-toggle" onClick={closeSidebar}>
            <FaBars />
          </button>
        </div>
        {/* <!-- links --> */}
        <nav>
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
          <ul className="links">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {isSidebarOpen && (
        <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.header`
  .navbar {
    padding: 0.3em 2em;
    box-shadow: var(--bs);
  }

  img {
    width: 5em;
  }

  nav {
    display: none;
  }

  .logo-and-toggle-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sidebar-toggle,
  .close-btn {
    background-color: white;
    border: none;
    font-size: 1.3rem;
    cursor: pointer;
  }

  .sidebar-toggle:hover {
    color: var(--clr-accent);
  }

  @media (min-width: 700px) {
    .navbar {
      padding: 0 5em;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .sidebar-toggle,
    .close-btn {
      display: none;
    }

    nav {
      display: block;
    }

    ul {
      display: flex;
      gap: 2em;
      li {
        list-style-type: none;
      }
      a {
        text-decoration: none;
        color: #000;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 2px;
        font-size: 0.9em;
      }

      a:hover {
        color: var(--clr-accent);
        transition: all 0.3s linear;
      }
    }
  }
`;

export default Navbar;
