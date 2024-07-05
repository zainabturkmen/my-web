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
            <br />
            <button>Download CV</button>
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
  button {
    display: inline-block;
    padding: 1em 1.8em;
    background: var(--clr-accent);
    color: var(--clr-dark);
    text-decoration: none;
    cursor: pointer;
    font-size: 0.8rem;
    text-transform: uppercase;
    margin-top: 2em;
    letter-spacing: 2px;
    font-weight: bold;
    border: none;
    transition: transform 0.4s ease-in-out;
  }

  button:hover {
    transform: scale(1.1);
  }

  .skills-section {
    padding: 0 3em;
    max-width: 1090px;
    margin: 0 auto;
    text-align: center;
    padding-top: 2em;
  }

  .title-class {
    text-align: center;
  }

  .scroller {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.3em;
      padding-block: 1rem;
      flex-wrap: wrap;
      margin-top: 2em;
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
