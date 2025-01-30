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

const SkillLevel = styled.div`
  height: 100%;
  background-color: #3b82f6;
  border-radius: 5px;
  transition: width 0.5s ease;
`;

const CardLinguagens = () => {
  return (
    <CardContainer>
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          style={{
            width: "100%",
            background: "rgba(209, 213, 219, 0.15)",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          whileHover={{ background: "rgba(209, 213, 219, 0.2)" }}
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
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
              <SkillLevel
                style={{
                  width: skill.level,
                  height: "10px",
                }}
              ></SkillLevel>
            </SkillBar>
          </CardInfoContainer>
        </motion.div>
      ))}
    </CardContainer>
  );
};

export default CardLinguagens;
