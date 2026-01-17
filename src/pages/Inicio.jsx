import styled from "styled-components";
import { motion } from "framer-motion";
import foto from "../assets/ft.jpeg";

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 220px);
  padding: 0 24px;
  gap: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;   /* <- centraliza horizontal */
    text-align: center;   /* <- centraliza texto */
    padding: 24px 16px;
    gap: 24px;
  }
`;

const TextoContainer = styled(motion.div)`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const TituloEstilizado = styled.h1`
  color: #60a5fa;
  font-size: 65px;
  font-weight: 500;
  margin-bottom: -30px;

  @media (max-width: 900px) {
    font-size: 42px;
    margin-bottom: -10px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const SubtituloEstilizado = styled.h4`
  color: #4f8de5;
  font-size: 20px;
  font-weight: 100;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

const ParagrafoEstilizado = styled.p`
  color: #f3f4f6;
  line-height: 1.6;

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

const FotoContainer = styled(motion.div)`
  width: 450px;
  height: 450px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid #60a5fa;
  box-shadow: 0px 4px 20px rgba(96, 165, 250, 0.5);

  /* remove o empurrão que quebra no mobile */
  margin-right: 100px;

  @media (max-width: 1100px) {
    margin-right: 0;
  }

  @media (max-width: 900px) {
    width: 260px;
    height: 260px;
    border-width: 4px;
  }

  @media (max-width: 480px) {
    width: 220px;
    height: 220px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Inicio = () => {
  return (
    <Main>
      <TextoContainer
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "backInOut" }}
      >
        <TituloEstilizado>Davi Pereira</TituloEstilizado>
        <SubtituloEstilizado>Full Stack Developer</SubtituloEstilizado>
        <ParagrafoEstilizado>
          Bem-vindo ao meu portfólio! Explore meus projetos e conheça mais sobre
          mim.
        </ParagrafoEstilizado>
      </TextoContainer>

      <FotoContainer
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "backInOut" }}
      >
        <img src={foto} alt="Foto de Davi Pereira" />
      </FotoContainer>
    </Main>
  );
};

export default Inicio;
