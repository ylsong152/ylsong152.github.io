import styled from "styled-components";
import htmlLogo from "../images/html-logo.svg";
import cssLogo from "../images/css-logo.svg";
import jsLogo from "../images/js-logo.svg";
import reactLogo from "../images/react-logo.svg";
import reduxLogo from "../images/redux-logo.svg";
import tailwindLogo from "../images/tailwind-logo.svg";
import styledComponentLogo from "../images/styled-component-logo.svg";
import aboutGraphic from "../images/about.jpg";

const WhatIDoWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: white;
  color: #333;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

const GraphicWrapper = styled.div`
  width: 50%;
  min-width: 300px; // Adjust according to your need
  flex-basis: 50%;
  flex-grow: 0;
  img {
    max-width: 70%;
    height: 100%;
    object-fit: cover;
    margin-left: 10%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 10%;
  }
`;

const ContentWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
  flex-basis: 50%;
  flex-grow: 0;

  @media (max-width: 768px) {
    padding: 40px;
  }
`;

const SectionTitle = styled.h2`
  text-align: left;
  font-size: 2.5em;
  margin: 0;
  padding-bottom: 20px;
`;

const Description = styled.h3`
  text-align: left;
  margin: 20px 0;
  font-size: 1.5em;
`;

const TechnologiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
`;

const Technology = styled.div`
  width: 50px; // halved size
  height: 50px; // halved size
  background: center / contain no-repeat;
  position: relative;

  &:hover::after {
    content: attr(data-tech);
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    white-space: nowrap;
  }
`;

const PointsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
`;

const Point = styled.p`
  text-align: left;
  margin: 6px;
`;

function About() {
  const techLogos = [
    { image: htmlLogo, name: "HTML" },
    { image: cssLogo, name: "CSS" },
    { image: jsLogo, name: "JavaScript" },
    { image: reactLogo, name: "React" },
    { image: reduxLogo, name: "Redux" },
    { image: tailwindLogo, name: "TailwindCSS" },
    { image: styledComponentLogo, name: "Styled-Component" },
  ];

  const points = [
    "⚡ Developing highly responsive web applications using modern frameworks such as React,",
    "⚡ Utilizing front-end build tools such as Webpack to optimize asset delivery and improve website load times.",
    "⚡ Debugging across various browsers and platforms.",
    "⚡ Collaborating effectively with cross-functional teams.",
    // add as many points as you need...
  ];

  return (
    <WhatIDoWrapper id="about">
      <GraphicWrapper>
        <img src={aboutGraphic} alt="about-graphic" />
      </GraphicWrapper>
      <ContentWrapper>
        <SectionTitle>What I Do</SectionTitle>
        <Description>Front-end Development</Description>
        <TechnologiesWrapper>
          {techLogos.map((logo) => (
            <Technology
              key={logo.name}
              style={{ backgroundImage: `url(${logo.image})` }}
              data-tech={logo.name}
              alt={logo.name}
            />
          ))}
        </TechnologiesWrapper>
        <PointsWrapper>
          {points.map((point, index) => (
            <Point key={index}>{point}</Point>
          ))}
        </PointsWrapper>
      </ContentWrapper>
    </WhatIDoWrapper>
  );
}

export default About;
