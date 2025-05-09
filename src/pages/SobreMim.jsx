import styled from "styled-components";
import { motion } from "framer-motion";

import foto from "../assets/ft2.jpeg";

import Titulo from "../components/Titulo";

const MainEstilizado = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 240px);
  gap: 100px;
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
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
      >
        <FotoEstilizada src={foto} alt="Foto de Davi Pereira" />
      </motion.div>
      <motion.div
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          width: "35%",
        }}
        initial={{
          x: 100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
      >
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
      </motion.div>
    </MainEstilizado>
  );
};

export default SobreMim;
