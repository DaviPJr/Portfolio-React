import styled from "styled-components";
import { motion } from "framer-motion";

import skills from "../../skillsData.jsx";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 600px) {
    width: 92%;
    grid-template-columns: 1fr; /* 1 card por linha */
    gap: 16px;
  }
`;

const Card = styled(motion.div)`
  width: 100%;
  background: rgba(209, 213, 219, 0.15);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: background 0.1s ease-in-out;

  &:hover {
    background: rgba(209, 213, 219, 0.2);
  }

  @media (max-width: 600px) {
    scroll-snap-align: start;
  }
`;


const CardTituloContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  padding: 0px 20px;
  padding-top: 20px;
`;

const CardTitulo = styled.p`
  color: #ffffff;
  font-size: 22px;
  font-weight: 500;
  @media (min-width: 768px) and (max-width: 1440px) {
    font-size: 18px;
  }
`;

const IconeEstilizado = styled.img`
  color: #60a5fa;
  height: 40px;
  @media (min-width: 768px) and (max-width: 1440px) {
    height: 25px;
  }
`;

const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0px 20px;
  padding-bottom: 20px;
`;

const CardInfo = styled.p`
  color: #d1d5db;
  @media (min-width: 768px) and (max-width: 1440px) {
    font-size: 14px;
  }
`;

const SkillBar = styled.div`
  width: 100%;
  height: 10px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  overflow: hidden;
`;

const CardLinguagens = () => {
  return (
    <CardContainer>
      {skills.map((skill, index) => (
        <Card
          key={index}
          initial={{
            opacity: 0,
            x: -100,
            y: 0,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: [10, 0],
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
          }}
        >
          <CardTituloContainer>
            <IconeEstilizado src={skill.icon} />
            <CardTitulo>{skill.name}</CardTitulo>
          </CardTituloContainer>
          <CardInfoContainer>
            <CardInfo>{skill.descricao}</CardInfo>
            <SkillBar>
              <motion.div
                style={{
                  width: skill.level,
                  height: "10px",
                  backgroundColor: "#3b82f6",
                  borderRadius: "5px",
                }}
                initial={{
                  width: 50,
                }}
                animate={{
                  width: skill.level,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.3,
                }}
              ></motion.div>
            </SkillBar>
          </CardInfoContainer>
        </Card>
      ))}
    </CardContainer>
  );
};

export default CardLinguagens;
