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
  background-color: red;
`;

export default About;
