import styled from "styled-components";

import Titulo from "../components/Titulo";
import CardLinguagens from "../components/CardLinguagens";

const MainEstilizado = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: calc(100vh - 270px);
`;

const Linguagens = () => {
  return (
    <MainEstilizado>
      <Titulo>Minhas habilidades</Titulo>
      <CardLinguagens />
    </MainEstilizado>
  );
};

export default Linguagens;
