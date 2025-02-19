import styled from "styled-components";
import Badge from "../Badge";
import Link from "../Link";
import projects, { badges } from "../../projectsData";

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 40px;
  width: 80%;
`;

const Card = styled.div`
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: rgba(209, 213, 219, 0.15);
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

const ImgEstilizada = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: top;
  height: 250px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardContent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const TituloEstilizado = styled.h2`
  color: #d1d5db;
`;

const SubEstilizado = styled.p`
  color: #d1d5db;
`;

const CardProjetos = () => {
  return (
    <CardContainer>
      {projects.map((project) => {
        const projectBadges = badges.find(
          (badge) => badge.projectId === project.id
        );

        return (
          <Card key={project.id}>
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
                <Link />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </CardContainer>
  );
};

export default CardProjetos;
