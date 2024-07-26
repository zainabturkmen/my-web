import React from "react";
import styled from "styled-components";
import githubSearch from "../assets/github-search.png";
import comfy from "../assets/comfy.png";

const Projects = () => {
  return (
    <Wrapper id="projects">
      <h2 className="title">Projects</h2>
      <div className="cards-container">
        <div className="card">
          <div className="image">
            <img src={githubSearch} alt="GitHub Search Project" />
          </div>
          <div className="description">
            <h3>GitHub Search User</h3>
            <p>
              This is the description for card 1. It has some interesting
              content.
            </p>
            <div className="buttons">
              <a href="#link1" className="btn">
                Live link
              </a>
              <a href="#link2" className="btn">
                Code Link
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={githubSearch} alt="  Search Project" />
          </div>
          <div className="description">
            <h3>Card 2 Title</h3>
            <p>
              This is the  for card 2. It has some interesting
              .
            </p>
            <div className="buttons">
              <a href="#link1" className="btn">
                Live Link
              </a>
              <a href="#link2" className="btn">
                Code Link
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={comfy} alt="comfy  Project" />
          </div>
          <div className="description">
            <h3>Comfy Store </h3>
            <p>This is the  for card 3. It has  </p>
            <div className="buttons">
              <a href="#link2" className="btn">
                Visit Full Design
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  gap: 1em;
  margin-top: 7em;

  .title {
    font-size: 36px;
    color: #333;
    margin-bottom: 20px;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 28px;
      margin-bottom: 15px;
    }
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    gap: 1em;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 30%;
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    background: linear-gradient(135deg, #f6f9fc, #e9ecef);
    transition: transform 0.3s;
    overflow: hidden;
    max-width: 32%;

    &:hover {
      transform: translateY(-10px);
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      max-width: 100%;
    }

    .image {
      width: 100%;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;

      img {
        max-width: 200%;
        max-height: 100%;
        border-radius: 10px;
      }
    }

    .description {
      text-align: center;

      h3 {
        margin: 10px 0;
        font-size: 20px;
        color: #333;

        @media (max-width: 768px) {
          font-size: 20px;
        }
      }

      p {
        font-size: 14px;
        color: #666;

        @media (max-width: 768px) {
          font-size: 14px;
        }
      }

      .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 15px;

        .btn {
          display: inline-block;
          padding: 0.5em 1em;
          border: none;
          border-radius: 5px;
          text-decoration: none;
          color: #000;
          background-color: #69d1ee;
          text-align: center;
          transition: background-color 0.3s;
          font-size: 0.9em;

          &:hover {
            background-color: var(--hover-color);
          }
        }
      }
    }
  }
`;

export default Projects;
