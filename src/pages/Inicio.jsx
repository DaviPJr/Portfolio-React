import styled from "styled-components";

import foto from "../assets/ft.jpeg";

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 990px;
`;

const MainTextoContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FotoContainer = styled.div`
  width: 450px;
  height: 450px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid #60a5fa;
  box-shadow: 0px 4px 20px rgba(96, 165, 250, 0.5);
  margin-right: 100px;
`;

const TituloEstilizado = styled.h1`
  color: #60a5fa;
  font-size: 65px;
  font-weight: 500;
  margin-bottom: -30px;
`;

const SubtituloEstilizado = styled.h4`
  color: #4f8de5;
  font-size: 20px;
  font-weight: 100;
`;

const ParagrafoEstilizado = styled.p`
  color: #f3f4f6;
`;

const Inicio = () => {
  return (
    <Main>
      <MainTextoContainer>
        <TituloEstilizado>Davi Pereira</TituloEstilizado>
        <SubtituloEstilizado>Full Stack Developer</SubtituloEstilizado>
        <ParagrafoEstilizado>
          Bem-vindo ao meu portfólio! Explore meus projetos e conheça mais sobre
          mim.
        </ParagrafoEstilizado>
      </MainTextoContainer>
      <FotoContainer>
        <img src={foto} alt="Foto de Davi Pereira" />
      </FotoContainer>
    </Main>
  );
};

export default Inicio;
