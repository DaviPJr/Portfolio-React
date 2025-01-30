import styled from "styled-components";
import Badge from "../Badge";
import Link from "../Link";
import projects, { badges } from "../../projectsData";

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardProjetos = () => {
  return (
    <CardContainer>
      {projects.map((project) => {
        const projectBadges = badges.filter(
          (badge) => badge.projectId === project.id
        );

        return (
          <Card key={project.id}>
            <div>
              <img src={project.img} alt={project.title} />
            </div>

            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>

            <div>
              {projectBadges.map((badge) => (
                <Badge key={badge.projectId} stack={badge.stack} />
              ))}
            </div>

            <div>
              <Link href={`/projects/${project.id}`}>Ver detalhes</Link>
            </div>
          </Card>
        );
      })}
    </CardContainer>
  );
};

export default CardProjetos;
