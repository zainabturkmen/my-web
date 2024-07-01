import React from "react";
import image from "../assets/devImage.png";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeSection id="home">
      <div className="title">
        <p>Hi it's me!</p>
        <h2 class="section__title">Zainab Turkmen</h2>
        <div className="dynamic-text">
          <h3 class="section__title"> I am a</h3>
        </div>
      </div>
      <p class="section__subtitle">front-end dev</p>
      <img src={image} alt="a picture of Zainab Turkmen" class="intro__img" />
    </HomeSection>
  );
};

const HomeSection = styled.section`
  position: relative;
  padding: 5em 2em;

  .section__subtitle {
    background-color: var(--clr-accent);
    margin: 0;
    font-size: var(--fs-h3);
    font-family: var(--ff-secondary);
    margin-bottom: 1em;
    padding: 0.25em 0.5em;
    letter-spacing: 2px;
    text-transform: capitalize;
  }

  img {
    display: block;
    max-width: 100%;
    box-shadow: var(--bs);
  }

  @media (min-width: 680px) {
    display: grid;
    grid-column-gap: 1em;
    width: min-content;
    margin: 0 auto;
    grid-template-areas:
      "img title"
      "img subtitle";
    grid-template-columns: min-content max-content;

    img {
      grid-area: img;
      min-width: 220px;
      position: relative;
      z-index: 2;
    }

    h1 {
      margin-top: 1.2em;
      font-size: 3rem;
    }
    .section__subtitle {
      align-self: start;
      grid-column: -1 / 1;
      grid-row: 2;
      text-align: right;
      position: relative;
      left: -1.5em;
      width: calc(100% + 1.5em);
    }
  }
`;

export default Home;
