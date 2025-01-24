import styled from "styled-components";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";

const FooterEstilizado = styled.footer`
  background: linear-gradient(
    146deg,
    rgba(0, 0, 30, 0.4) 0%,
    rgba(5, 0, 60, 0.4) 100%
  );
  height: 130px;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
`;

const FooterConteudo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const FooterIcones = styled.div`
  display: flex;
  gap: 20px;
`;

const Icone = styled.div`
  font-size: 27px;
  color: rgba(0, 0, 0, 0.7);
  transition: color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  &:hover {
    color: #60a5fa;
  }
`;

const FooterRights = styled.p`
  color: #9ca3af;
`;

const Footer = () => {
  return (
    <FooterEstilizado>
      <FooterConteudo>
        <FooterIcones>
          <Icone>
            <FiGithub />
          </Icone>
          <Icone>
            <FiLinkedin />
          </Icone>
          <Icone>
            <MdOutlineEmail />
          </Icone>
          <Icone>
            <FiInstagram />
          </Icone>
        </FooterIcones>
        <FooterRights>© 2025 Davi Pereira. All rights reserved.</FooterRights>
      </FooterConteudo>
    </FooterEstilizado>
  );
};

export default Footer;
