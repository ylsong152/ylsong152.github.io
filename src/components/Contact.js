import styled from "styled-components";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactWrapper = styled.div`
  padding: 50px;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ContactHeading = styled.h2`
  font-size: 2em;
  text-align: center;
  margin: 0 0 40px 0;
`;

const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  color: #333;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    color: #0077b5;
  }

  svg {
    margin-right: 10px;
  }
`;

const socialLinks = [
  {
    href: "mailto:ylsong152@gmail.com",
    Icon: FaEnvelope,
  },
  {
    href: "https://linkedin.com/in/yonglesong",
    Icon: FaLinkedin,
  },
  {
    href: "https://github.com/ylsong152",
    Icon: FaGithub,
  },
  // Add more social links here...
];

function Contact() {
  return (
    <ContactWrapper id="contact">
      <ContactHeading>Contact</ContactHeading>
      <SocialLinksWrapper>
        {socialLinks.map(({ href, Icon }, index) => (
          <SocialLink key={index} href={href} target="_blank" rel="noreferrer">
            <Icon size="2em" />
          </SocialLink>
        ))}
      </SocialLinksWrapper>
    </ContactWrapper>
  );
}

export default Contact;
