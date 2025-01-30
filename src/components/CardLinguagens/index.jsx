import styled from "styled-components";
import { motion } from "framer-motion";

import skills from "../../skillsData.jsx";

const CardContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 40px;
  height: 600px;
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
`;

const IconeEstilizado = styled.img`
  color: #60a5fa;
  height: 40px;
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
