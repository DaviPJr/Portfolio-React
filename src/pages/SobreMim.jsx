import styled from "styled-components";

import foto from "../assets/ft2.jpeg";

import Titulo from "../components/Titulo";

const MainEstilizado = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1000px;
  gap: 100px;
`;

const InfosContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 35%;
`;

const ParagrafoEstilizado = styled.p`
  color: #d1d5db;
`;

const FotoEstilizada = styled.img`
  height: 500px;
  border-radius: 5px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
`;

const SobreMim = () => {
  return (
    <MainEstilizado>
      <div>
        <FotoEstilizada src={foto} alt="Foto de Davi Pereira" />
      </div>
      <InfosContainer>
        <Titulo>Davi Pereira</Titulo>
        <ParagrafoEstilizado>
          Cursando Análise e Desenvolvimento de Sistemas.
        </ParagrafoEstilizado>
        <ParagrafoEstilizado>
          Sou um desenvolvedor web fullstack, apaixonado por tecnologia e
          inovação. Acredito que a tecnologia tem o poder de transformar ideias
          em soluções que impactam positivamente a vida das pessoas.
        </ParagrafoEstilizado>
        <ParagrafoEstilizado>
          Sou uma pessoa curiosa por natureza e sempre em busca de aprendizado.
          Tenho experiência no desenvolvimento de aplicações completas e
          robustas, com foco em designs atraentes que proporcionam uma
          experiência de usuário excepcional.
        </ParagrafoEstilizado>
        <ParagrafoEstilizado>
          Atualmente, estou aprimorando minhas habilidades em ferramentas
          modernas como React, Next.js, React Native, entre outras. Busco
          oportunidades para colaborar com times alinhados aos meus valores, em
          um ambiente que promova crescimento profissional e desafios
          estimulantes. Meu objetivo é contribuir com projetos complexos e
          inovadores, onde eu possa aplicar meus conhecimentos e continuar
          evoluindo como profissional.
        </ParagrafoEstilizado>
      </InfosContainer>
    </MainEstilizado>
  );
};

export default SobreMim;
