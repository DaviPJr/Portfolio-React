import styled from "styled-components";

import Titulo from "../components/Titulo";
import CardLinguagens from "../components/CardLinguagens";

const MainEstilizado = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: auto;
  @media (min-width: 768px) and (max-width: 1440px) {
    margin-top: 13px;
    gap: 20px;
  }
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
