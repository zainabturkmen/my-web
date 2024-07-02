import React from "react";
import image from "../assets/devImage.png";
import styled, { keyframes, css } from "styled-components";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <AboutSection>
      <div className="about-me" id="about">
        <h2 class="about-title">Who I am</h2>
        <p class="about-subtitle">
          Designer & developer based out of Afghanistan
        </p>
        <div class="about-me-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <img src={image} alt="person's image" />
      </div>
      <section className="skills-section">
        <h2 className="skills">Skills</h2>
        <div className="scroller">
          <Marquee>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>APIs</li>
              <li>Styled components</li>
              <li>Animation CSS</li>
              <li>Responsive Web Design</li>
              <li>UI/UX Design</li>
              <li>Figma</li>
              <li>Git and Github</li>
            </ul>
          </Marquee>
        </div>
      </section>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  .about-me {
    padding: 5em 2em;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
  }

  img {
    display: block;
    max-width: 100%;
    box-shadow: var(--bs);
  }

  .about-subtitle {
    background-color: var(--clr-accent);
    margin: 0;
    font-size: var(--fs-h3);
    font-family: var(--ff-secondary);
    margin: 1.5em 0 0 0;
    padding: 0.25em 0.5em;
    letter-spacing: 2px;
    text-transform: capitalize;
  }

  .skills{
    text-align: center;
  } 
  
  .scroller {
    max-width: 900px;
    margin: 0 auto;
    padding: 2em;
    text-align: center;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      padding-block: 1rem;
      flex-wrap: wrap;
    }

    li {
      list-style-type: none;
      box-shadow: var(--bs);
      padding: 1em;
      border-radius: 5px;
      font-size: 1em;
    }
  }

  @media (min-width: 700px) {
    .about-me {
      text-align: start;
      display: grid;
      grid-template-columns: 1fr 200px;
      grid-template-areas:
        "title img"
        "subtitle img"
        "text img";
      grid-column-gap: 2em;
      .about-title {
        grid-area: title;
      }
      .about-subtitle {
        grid-column: 1 /-1;
        grid-row: 2;
        position: relative;
        left: -1em;
        width: calc(100% + 2em);
        padding-left: 1em;
        padding-right: calc(200px + 4em);
      }

      img {
        grid-area: img;
        position: relative;
        z-index: 2;
        /* object-fit: cover; */
      }
    }
  }
`;

export default About;
