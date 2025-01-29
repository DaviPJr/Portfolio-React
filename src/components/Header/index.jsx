import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderEstilizado = styled.header`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
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
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const HeaderLinks = styled.div`
  display: flex;
  gap: 23px;
`;

const TituloEstilizado = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
`;

const LinksEsilizados = styled(Link)`
  color: #d1d5db;

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
          <LinksEsilizados>Projetos</LinksEsilizados>
          <LinksEsilizados>Certificados</LinksEsilizados>
          <LinksEsilizados>Contato</LinksEsilizados>
        </HeaderLinks>
      </HeaderConteudo>
    </HeaderEstilizado>
  );
};

export default Header;
