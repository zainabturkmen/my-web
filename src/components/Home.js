import React from "react";
import animation from "../assets/animation.json";
import styled from "styled-components";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";


const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["Web Developer", "Web designer", "React.js developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 90,
  });
  return (
    <HomeSection id="home">
      <div className="title">
        <p>Hi it's me!</p>
        <h2 class="section__title">Zainab Turkmen</h2>
        <h3>
          I am a <span>{typeEffect}</span>
          <span style={{ fontSize: "1em", color: "black" }}>
            <Cursor />
          </span>
        </h3>
      </div>
      <p class="section__subtitle">front-end dev</p>
      <img
        src={animation}
        alt="a picture of Zainab Turkmen"
        class="intro__img"
      />
    </HomeSection>
  );
};

const HomeSection = styled.section`
  position: relative;
  padding: 5em 2em;

  P {
    text-align: center;
    font-size: 1.3em;
    margin-bottom: 0.5em;
  }

  h2 {
    font-size: 2em;
    text-align: center;
  }
  h3 {
    text-align: center;
    font-weight: 400;
    font-size: 1.2em;
    margin: 0;
    padding: 0.6em 0 0.8em 0;
    span {
      color: var(--clr-accent);
      font-weight: bold;
    }
  }

  .Cursor {
    color: #0000;
  }

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

    h2 {
      font-size: 2.5em;
    }

    h3 {
      font-size: 1.5em;
    }
    img {
      grid-area: img;
      min-width: 220px;
      position: relative;
      z-index: 2;
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
