import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderEstilizado = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  background: linear-gradient(
    146deg,
    rgba(1, 3, 64, 0.5) 0%,
    /* Menos opaco, mais transparente */ rgba(20, 1, 87, 0.5) 100%
      /* Menos opaco, mais transparente */
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
  font-weight: 600;
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
          <LinksEsilizados>Inicio</LinksEsilizados>
          <LinksEsilizados>Sobre mim</LinksEsilizados>
          <LinksEsilizados>Linguagens</LinksEsilizados>
          <LinksEsilizados>Projetos</LinksEsilizados>
          <LinksEsilizados>Certificados</LinksEsilizados>
          <LinksEsilizados>Contato</LinksEsilizados>
        </HeaderLinks>
      </HeaderConteudo>
    </HeaderEstilizado>
  );
};

export default Header;
