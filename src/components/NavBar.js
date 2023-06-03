import { useState, useRef, useEffect } from 'react';
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useSpring, animated, config } from "react-spring";
import styled from 'styled-components';
import useOnClickOutside from '../hooks/useOnClickOutside';
import useScrollPosition from '../hooks/useScrollPosition';

const NavBarWrapper = styled(animated.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  padding: 20px 275px;
  background-color: #333;
  color: #fff;
  z-index: 1000; 

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 0;
  }
`;

const NavItems = styled(animated.div)`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    padding: 0;
    flex-direction: column;
    height: 0;
    overflow: hidden;
    align-items: center;
  }
`;

const NavItem = styled(ScrollLink)`
  margin-right: 20px;
  color: #fff;
  text-decoration: none;
  transition: color 0.5s ease;

  &:hover {
    color: #0077b5;
    cursor: pointer;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const BurgerButton = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function NavBar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setMobile] = useState(window.innerWidth <= 768);
  const navRef = useRef();

  useOnClickOutside(navRef, () => setOpen(false));

  const { visible } = useScrollPosition();

  const navPosition = useSpring({
    transform: isMobile ? (visible ? "translate3d(0,0,0)" : "translate3d(0,-100%,0)") : "translate3d(0,0,0)",
    config: { tension: 100, friction: 25 },
  });

  const navHeight = useSpring({
    height: open ? "150px" : "0px",
    config: config.stiff,
  });

  // Watch for changes in viewport size
  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <NavBarWrapper style={navPosition} ref={navRef}>
      <BurgerButton onClick={() => setOpen(!open)}>
        {open ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </BurgerButton>
      <NavItems style={navHeight}>
        <NavItem onClick={() => setOpen(false)} to="about" smooth={true} duration={500}>About</NavItem>
        <NavItem onClick={() => setOpen(false)} to="projects" smooth={true} duration={500}>Projects</NavItem>
        <NavItem onClick={() => setOpen(false)} to="contact" smooth={true} duration={500}>Contact</NavItem>
      </NavItems>
    </NavBarWrapper>
  );
}

export default NavBar;
