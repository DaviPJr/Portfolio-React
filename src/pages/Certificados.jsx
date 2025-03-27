import Titulo from "../components/Titulo";
import CardCertificados from "../components/CardCertificados";

import styled from "styled-components";

const MainEstilizado = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 15px;
`;

const Certificados = () => {
  return (
    <MainEstilizado>
      <Titulo>Certificados</Titulo>
      <CardCertificados />
    </MainEstilizado>
  );
};

export default Certificados;
