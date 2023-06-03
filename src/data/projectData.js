import projectCookie from "../images/project-cookie.jpeg";
import projectWeatherApp from "../images/project-weather-app.jpeg";
import projectCalculator from "../images/project-calculator.jpeg";
import projectPortfolio from "../images/project-portfolio.jpeg";

const projectData = [
  {
    title: "Portfolio Site",
    description:
      "I put together a shiny portfolio site to net a web dev job. It showcases my coding wizardry, knack for caffeinated all-nighters, and my HTML prowess that's more reliable than my morning alarm.",
    liveDemoLink: "https://ylsong152.github.io",
    sourceCodeLink: "https://github.com/ylsong152/ylsong152.github.io",
    image: projectPortfolio,
    tech: ["React", "Redux", "Styled Components"],
  },
  {
    title: "Cookie Clicker",
    description:
      "The addictive Cookie Clicker app, built with React, Redux and TailwindCSS. Click your way to cookie domination, unlocking upgrades and generators along the way.",
    liveDemoLink: "https://ylsong152.github.io/cookie-clicker",
    sourceCodeLink: "http://github.com/ylsong152/cookie-clicker",
    image: projectCookie,
    tech: ["React", "Redux", "TailwindCSS"],
  },
  {
    title: "Weather App",
    description: "In the sweltering, flip-flop melting heatwave of May 2023, unpredictable Singapore weather inspired me to create an app. After all, knowing if it's umbrella or sunglasses day is a survival skill here!",
    liveDemoLink: "https://ylsong152.github.io/weather-app-sg",
    sourceCodeLink: "http://github.com/ylsong152/weather-app-sg",
    image: projectWeatherApp,
    tech: ["Javascript", "CSS", "Webpack"],
  },
  {
    title: "Calculator",
    description: "In the early days of coding, I made a calculator app. Who knew that 'Hello World' could evolve into 'Hello, did I just build a working calculator?!'",
    liveDemoLink: "https://ylsong152.github.io/calculator",
    sourceCodeLink: "http://github.com/ylsong152/calculator",
    image: projectCalculator,
    tech: ["Javascript", "CSS"],
  },
  // More projects...
];

export default projectData;
