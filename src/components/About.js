import React from "react";
import image from "../assets/devImage.png";
import styled from "styled-components";

const About = () => {
  return (
    <AboutSection class="about-me" id="about">
      <h2 class="about-title">Who I am</h2>
      <p class="about-subtitle">Designer & developer based out of NYC</p>

      <div class="about-me">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <img src={image} alt="person's image" />
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 5em 2em;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;

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

  @media (min-width: 700px) {
    text-align: start;
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr 200px;
    grid-template-areas:
      "title img"
      "subtitle img"
      "text img";

    .about-title{
        grid-area: title;
    }
    .about-subtitle {
      grid-column: 1;
    }
    img {
      grid-area: img;

    }
  }
`;

export default About;
