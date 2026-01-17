import Titulo from "../components/Titulo";
import CardProjetos from "../components/CardProjetos";

import styled from "styled-components";

const MainEstilizado = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  gap: 15px;
`;

const Projetos = () => {
  return (
    <MainEstilizado>
      <Titulo>Meus Projetos</Titulo>
      <CardProjetos />
    </MainEstilizado>
  );
};

export default Projetos;
