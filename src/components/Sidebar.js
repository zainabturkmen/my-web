import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-scroll";
import links from "./data";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  return (
    <SidebarContainer>
      <aside className={`sidebar ${isSidebarOpen && "show-sidebar"}`}>
        <button type="button" className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <ul className="links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link
                  to={url}
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={500}
                  onClick={closeSidebar}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    z-index: 1;
    background: white;
    transform: translate(-100%);
    transition: all 0.3s linear;
    box-shadow: var(--bs);
  }

  .show-sidebar {
    transform: translate(0%);
    transition: transform 1s linear;

    z-index: 999;
  }

  .close-btn {
    font-size: 1.5rem;
    background: transparent;
    border-color: transparent;
    color: #000;
    transition: all 0.3s linear;
    cursor: pointer;
    padding: 0.5em 1.5em;
  }

  .close-btn:hover {
    color: var(--clr-accent);
  }
  .logo {
    justify-self: center;
    width: 5em;
  }
  .links {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2em;

    li {
      list-style-type: none;
    }
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: uppercase;
    transition: all 0.3s linear;
    letter-spacing: 2px;
    text-decoration: none;
    color: #000;
    font-weight: bolder;
    cursor: pointer;
  }

  .links a:hover {
    padding-left: 1rem;
    color: var(--clr-accent);
    transform: scale(1.1);
  }

  @media screen and (min-width: 700px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
