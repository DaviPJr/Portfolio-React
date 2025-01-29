import styled from "styled-components";

const TituloEstilizado = styled.h1`
  color: white;
`;

const Titulo = ({ children }) => {
  return <TituloEstilizado>{children}</TituloEstilizado>;
};

export default Titulo;
