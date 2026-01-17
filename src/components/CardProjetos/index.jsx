import styled from "styled-components";
import Badge from "../Badge";
import Link from "../Link";
import projects, { badges } from "../../projectsData";
import { motion } from "framer-motion";

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

const CardContainer = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;

  /* Tablet */
  @media (max-width: 1024px) {
    width: 92%;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }

  /* Mobile: 1 card por linha (scroll vertical) */
  @media (max-width: 600px) {
    width: 92%;
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;


const Card = styled(motion.div)`
  border-radius: 8px;
  background: rgba(209, 213, 219, 0.15);
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
`;

const ImgEstilizada = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  object-position: top;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const CardContent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TituloEstilizado = styled.h2`
  color: #d1d5db;
`;

const SubEstilizado = styled.p`
  color: #d1d5db;
`;

const LinkRow = styled.div`
  margin-top: auto;
`;

const CardProjetos = () => {
  return (
    <CardContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => {
        const projectBadges = badges.find(
          (badge) => badge.projectId === project.id
        );

        return (
          <Card key={project.id} variants={cardVariants} initial="hidden" animate="visible">
            <div>
              <ImgEstilizada src={project.img} alt={project.title} />
            </div>
            <CardContent>
              <CardDiv>
                <TituloEstilizado>{project.title}</TituloEstilizado>
                <SubEstilizado>{project.description}</SubEstilizado>
              </CardDiv>

              <div>
                {projectBadges.stack.map((tech, index) => (
                  <Badge key={index} stack={tech} />
                ))}
              </div>

              <div>
                <LinkRow>
                  <Link />
                </LinkRow>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </CardContainer>
  );
};

export default CardProjetos;
