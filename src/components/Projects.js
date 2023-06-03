import styled, { keyframes } from "styled-components";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import projectData from "../data/projectData";

// Initialize Animate on Scroll library
AOS.init();

const ProjectsWrapper = styled.div`
  background-color: #f4f4f4;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-column-gap: 100px;
  padding: 50px 15%;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
    grid-gap: 20px;
  }
`;

const ProjectHeading = styled.h2`
  grid-column: 1 / -1;
  font-size: 2em;
  text-align: center;
`;

const Project = styled.div`
  background-color: #ffffff; // Changed background color
  padding: 15px;
  margin-bottom: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.3s ease;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1); // Enhanced box-shadow

  &:hover {
    transform: scale(1.05); // Increased scaling effect
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); // Increased box-shadow on hover
  }
`;

const ProjectTitle = styled.h3`
  text-align: left;
  font-size: 1.5em;
  font-weight: 900;
  margin: 10px 0;
`;

const ProjectDescription = styled.p`
  margin: 20px 0;
  color: #333; // Changed color
  font-weight: 400;
  min-height: 100px;
  margin-bottom: 10px;
`;

const LinkAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const ProjectLink = styled.a`
  display: inline-flex; // Updated to flex to align the items
  align-items: center; // Align items vertically
  margin-right: 10px;
  text-decoration: none;
  color: #333;
  background-color: #0077b5;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    animation: ${LinkAnimation} 0.3s ease-in-out;
    background-color: #005582;
  }

  svg {
    margin-right: 5px;
  }
`;

const ProjectImage = styled.img`
  width: 100%; // 100% of the container width
  height: 250px; // You can adjust this based on your design
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const TechLabel = styled.span`
  display: inline-block;
  border: 1px solid;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 2px 8px;
  font-size: 0.8em;
`;

const TechLabelsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; // To wrap labels to new line when they don't fit
`;

function Projects() {
  return (
    <ProjectsWrapper id="projects">
      <ProjectHeading data-aos="fade-up" data-aos-once="true">
        Things I Make
      </ProjectHeading>
      {projectData.map((project, index) => (
        <Project
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 50}
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <ProjectImage
            src={project.image}
            alt={`Preview of ${project.title}`}
          />
          <div>
            <ProjectTitle>{project.title}</ProjectTitle>
            <TechLabelsWrapper>
              {project.tech.map((tech, index) => (
                <TechLabel key={index}>{tech}</TechLabel>
              ))}
            </TechLabelsWrapper>
          </div>
          <ProjectDescription>{project.description}</ProjectDescription>
          <LinksWrapper>
            <ProjectLink href={project.liveDemoLink} target="_blank">
              <FaExternalLinkAlt />
              Live Demo
            </ProjectLink>
            <ProjectLink href={project.sourceCodeLink} target="_blank">
              <FaCode />
              Source Code
            </ProjectLink>
          </LinksWrapper>
        </Project>
      ))}
    </ProjectsWrapper>
  );
}

export default Projects;
