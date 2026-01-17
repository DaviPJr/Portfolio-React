import styled from "styled-components";
import { motion } from "framer-motion";

import foto from "../assets/ft2.jpeg";
import Titulo from "../components/Titulo";

const MainEstilizado = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: calc(100vh - 240px);

  gap: 100px;
  padding: 0 24px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 32px;
    padding: 24px 16px;
    min-height: auto; /* deixa a página crescer */
  }
`;

const ParagrafoEstilizado = styled.p`
  color: #d1d5db;
  line-height: 1.6;
`;

const FotoEstilizada = styled.img`
  height: 500px;
  border-radius: 5px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);

  @media (max-width: 900px) {
    height: auto;
    width: min(320px, 90vw); /* controla no mobile */
  }
`;

const TextoContainer = styled(motion.div)`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 35%;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 600px;
    text-align: left;
  }
`;

const SobreMim = () => {
  return (
    <MainEstilizado>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <FotoEstilizada src={foto} alt="Foto de Davi Pereira" />
      </motion.div>

      <TextoContainer
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <Titulo>Davi Pereira</Titulo>

        <ParagrafoEstilizado>
          Cursando Análise e Desenvolvimento de Sistemas, com foco em transformar
          dados e tecnologia em soluções que geram impacto real no negócio.
        </ParagrafoEstilizado>

        <ParagrafoEstilizado>
          Atualmente atuo na área de Transformação Digital, trabalhando com
          análise de dados, automação e desenvolvimento de soluções em Power BI,
          Power Automate, SQL, Python e tecnologias web. Tenho forte interesse em
          projetos que envolvam integração de sistemas, visualização de dados,
          engenharia analítica e melhoria de processos.
        </ParagrafoEstilizado>

        <ParagrafoEstilizado>
          Sou uma pessoa curiosa, analítica e movida por aprendizado contínuo.
          Gosto de entender o problema a fundo, estruturar dados, criar modelos e
          construir soluções que sejam ao mesmo tempo técnicas, eficientes e bem
          apresentadas ao usuário final.
        </ParagrafoEstilizado>

        <ParagrafoEstilizado>
          Venho aprofundando meus estudos em Data Analytics, Business
          Intelligence e Desenvolvimento Full Stack, buscando unir visão de
          negócio com capacidade técnica. Procuro oportunidades para crescer em
          ambientes que valorizem inovação, colaboração e desafios, onde eu
          possa evoluir como profissional e contribuir com projetos de alto
          impacto.
        </ParagrafoEstilizado>
      </TextoContainer>
    </MainEstilizado>
  );
};

export default SobreMim;
