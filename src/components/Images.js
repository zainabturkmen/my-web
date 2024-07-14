import React from "react";
import reactLogo from "../assets/react.png";
import node from "../assets/node.png";
import htmlLogo from "../assets/html.png";
import jsLogo from "../assets/js.png";
import UXLogo from "../assets/UX.webp";
import figmaLogo from "../assets/figma.png";
import cssLogo from "../assets/CSS.webp";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import vsCode from "../assets/vscode.png";
import animate from "../assets/animation.png";
import pnpm from "../assets/pnpm.png";
import Marquee from "react-fast-marquee";

const Images = () => {
  return (
    <ul className="first-marquee">
      <Marquee autoFill pauseOnClick>
        <img src={reactLogo} className="skill-logo" />
        <img src={jsLogo} className="skill-logo" />
        <img src={htmlLogo} className="skill-logo" />
        <img src={cssLogo} className="skill-logo" />
        <img src={node} className="skill-logo" />
        <img src={UXLogo} className="skill-logo" />
      </Marquee>
      <Marquee direction="right" pauseOnClick autoFill>
        <img src={animate} className="skill-logo" />
        <img src={figmaLogo} className="skill-logo" />
        <img src={gitLogo} className="skill-logo" />
        <img src={githubLogo} className="skill-logo" />
        <img src={vsCode} className="skill-logo" />
        <img src={pnpm} className="skill-logo" />
      </Marquee>
    </ul>
  );
};

export default Images;
