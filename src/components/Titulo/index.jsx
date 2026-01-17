import styled from "styled-components";

const TituloEstilizado = styled.h1`
  color: white;
  margin: 0;
  padding: 24px 0 32px; /* top | left/right | bottom */
  text-align: center;
`;



const Titulo = ({ children }) => {
  return <TituloEstilizado>{children}</TituloEstilizado>;
};

export default Titulo;
