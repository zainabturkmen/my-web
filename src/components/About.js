import React from "react";
import image from "../assets/devImage.png";
import styled from "styled-components";
import Images from "./Images";
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
        <h2 className="skills">Skills & Tools</h2>
        <div className="scroller">
            <Images />
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

  .skills-section {
    padding: 0 3em;
    max-width: 1090px;
    margin: 0 auto;
    text-align: center;
  }

  .title-class {
    text-align: center;
  }

  .scroller {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 3em;
      row-gap: 1.5em;
      padding-block: 1rem;
      flex-wrap: wrap;
      margin-top: 1em;
    }
    .skill-logo {
      height: 5.5em;
      object-fit: contain;
      border-radius: 10px;
      padding: 0.5em;
      box-shadow: none;
      transition: transform 0.5s ease-in-out;
    }
    .skill-logo:hover {
      transform: scale(1.1);
    }
  }

  @media (min-width: 700px) {
    .about-me {
      padding: 5em 3em;
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
        margin-top: 0.5em;
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
      }

      .skills-section {
        h2,
        p {
          text-align: start;
        }
      }
    }
  }
`;

export default About;
