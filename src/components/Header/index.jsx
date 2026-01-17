import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderEstilizado = styled.header`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 65px;
  padding: 10px 0;
  background: linear-gradient(
    146deg,
    rgba(0, 0, 30, 0.4) 0%,
    rgba(5, 0, 60, 0.4) 100%
  );
`;

const HeaderConteudo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  width: 1440px;
  max-width: 100%;
  padding: 0 16px;
  margin: 0 auto;
`;

const HeaderLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  @media (max-width: 768px) {
    gap: 10px;
    font-size: 14px;
  }
`;

const TituloEstilizado = styled.p`
  color: #ffffff;
  font-size: 22px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const LinksEsilizados = styled(Link)`
  color: #d1d5db;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`;


const Header = () => {
  return (
    <HeaderEstilizado>
      <HeaderConteudo>
        <TituloEstilizado>Portfolio</TituloEstilizado>
        <HeaderLinks>
          <LinksEsilizados to="/">Inicio</LinksEsilizados>
          <LinksEsilizados to="/sobre-mim">Sobre mim</LinksEsilizados>
          <LinksEsilizados to="/linguagens">Linguagens</LinksEsilizados>
          <LinksEsilizados to="/projetos">Projetos</LinksEsilizados>
          <LinksEsilizados to="/certificados">Certificados</LinksEsilizados>
          <LinksEsilizados to="/contato">Contato</LinksEsilizados>
        </HeaderLinks>
      </HeaderConteudo>
    </HeaderEstilizado>
  );
};

export default Header;
