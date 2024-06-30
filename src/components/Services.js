import React from "react";
import styled from "styled-components";
import { ServicesData } from "../components/data";
import backImage from "../assets/backImage.png";
// import webImage from "../assets/web-iamge.jpeg"
// import webImage4 from "../assets/web-imagee4.jpeg"
// import webImage2 from "../assets/web-image2.jpeg"
// import webImage3 from "../assets/web-image3.jpeg"
// import webImage5 from "../assets/web-image5.jpeg"
const Services = () => {
  return (
    <ServicesSection id="Services">
      <h2 class="section__title">What I do</h2>
      <div class="services">
        {ServicesData.map(({ id, title, text }) => (
          <div key={id} className="service">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>

      <a href="#work" class="btn">
        My Work
      </a>
    </ServicesSection>
  );
};

const ServicesSection = styled.section`
  background-color: var(--clr-dark);
  background-image: url(${backImage});
  background-blend-mode: multiply;
  background-size: cover;
  color: var(--clr-light);
  text-align: center;
  padding: 2.5em 3em;

  .services {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }

  h2 {
    color: var(--clr-accent);
    position: relative;
  }
  h2::after {
    content: "";
    display: block;
    width: 3em;
    height: 1px;
    margin: 0.5em auto 1em;
    background: currentColor;
    opacity: 1;
  }

  p {
    font-size: 0.85em;
    letter-spacing: 0.5px;
    line-height: 2em;
    opacity: 0.8;
  }

  .service {
    max-width: 500px;
    margin: 0 auto;
  }

  .btn {
    display: inline-block;
    padding: 0.3em 1.8em;
    background: var(--clr-accent);
    color: var(--clr-dark);
    text-decoration: none;
    cursor: pointer;
    font-size: 0.8rem;
    text-transform: uppercase;
    margin-top: 2em;
    letter-spacing: 2px;
    font-weight: bold;
  }

  @media screen and (min-width: 800px) {
    .services {
      display: flex;
      flex-direction: row;
      max-width: 1000px;
      margin: 0 auto;
      gap: 2.5em;
    }
  }
`;

export default Services;