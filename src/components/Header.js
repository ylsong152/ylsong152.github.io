import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import headerImage from "../images/header.png";
import { Link as ScrollLink } from "react-scroll";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 270px;
  background-color: #f4f4f4;
  color: #333;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 20px 0 20px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
`;

const HeaderRole = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
`;

const HeaderSubtitle = styled.p`
  font-size: 1.2em;
  margin-top: 0;
  max-width: 700px;
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const Link = styled.a`
  color: #333;
  font-size: 2em;

  &:hover {
    color: #0077b5;
  }
`;

const Button = styled(ScrollLink)`
  display: inline-block;
  margin: 20px 20px 0 0;
  padding: 10px 20px;
  background-color: #0077b5;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #005582;
  }
`;

const ImageWrapper = styled.div`
  margin: 50px 60px;
  max-width: 400px;

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    max-width: 50%;
  }
`;

function Header() {
  const fade = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });

  return (
    <HeaderWrapper id="header">
      <HeaderContent>
        <animated.div style={fade}>
          <HeaderTitle>Song Yong Le</HeaderTitle>
          <HeaderRole>{"<Web Developer />"}</HeaderRole>
          <HeaderSubtitle>
            I'm a coding enthusiast who skipped the computer science degree to
            become a self-taught Front-End Wizard.
            <br />
            <br />
            My professional playground is the world of HTML5, CSS3, and
            JavaScript, with a particular fondness for the dynamic capabilities
            of ReactJS. I have an unwavering passion for transforming user
            experiences into engaging and enjoyable journeys.
          </HeaderSubtitle>

          <LinksWrapper>
            <Link
              href="https://www.linkedin.com/in/yonglesong/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/ylsong152"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Link>
          </LinksWrapper>

          <Button href="https://drive.google.com/u/2/uc?id=1pK8KQrGc9DzyjS0SgdTNJs_Nfk8nf8he&export=download"
            download
            as="a">
            Download Resume
          </Button>
          <Button to="contact" smooth={true} duration={500}>Contact Me</Button>
        </animated.div>
      </HeaderContent>
      <ImageWrapper>
        <img src={headerImage} alt="headerImage"></img>
      </ImageWrapper>
    </HeaderWrapper>
  );
}

export default Header;
