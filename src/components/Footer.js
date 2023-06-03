import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 20px 50px;
  background-color: #333;
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>© 2023 Song Yong Le. All rights reserved.</p>
    </FooterWrapper>
  );
}

export default Footer;
