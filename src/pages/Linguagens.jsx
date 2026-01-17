import styled from "styled-components";

import Titulo from "../components/Titulo";
import CardLinguagens from "../components/CardLinguagens";

const MainEstilizado = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  width: 100%;
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
