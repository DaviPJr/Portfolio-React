import styled from "styled-components";

import certificates from "../../certificationData";

const CertificadoContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 40px;
  width: 80%;
`;

const CertificadoCard = styled.div`
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
  height: 300px;
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
    <CertificadoContainer>
      {certificates.map((certificate) => {
        return (
          <CertificadoCard key={certificate.id}>
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
