import styled from "styled-components";
import { motion } from "framer-motion";

import certificates from "../../certificationData";

const containerVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const CertificadoContainer = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  width: 80%;
  max-width: 1100px;
  margin: 0 auto;

  /* Tablet */
  @media (max-width: 1024px) {
    width: 92%;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  /* Mobile: 1 card por linha */
  @media (max-width: 600px) {
    width: 92%;
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;


const CertificadoCard = styled(motion.div)`
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: rgba(209, 213, 219, 0.15);
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const ImgEstilizada = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: top;
  height: 200px; /* antes 300 */
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 15px;
  padding-bottom: 10px;
`;

const TituloEstilizado = styled.h3`
  color: #d1d5db;
`;

const SubtituloEstilizado = styled.p`
  color: #d1d5db;
`;

const CardCertificados = () => {
  return (
    <CertificadoContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {certificates.map((certificate) => {
        return (
          <CertificadoCard key={certificate.id} variants={cardVariants} initial="hidden" animate="visible">
            <ImgEstilizada src={certificate.img} alt={certificate.title} />
            <CardDiv>
              <TituloEstilizado>{certificate.title}</TituloEstilizado>
              <SubtituloEstilizado>{certificate.course}</SubtituloEstilizado>
              <SubtituloEstilizado>{certificate.year}</SubtituloEstilizado>
            </CardDiv>
          </CertificadoCard>
        );
      })}
    </CertificadoContainer>
  );
};

export default CardCertificados;
