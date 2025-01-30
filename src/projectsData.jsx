import hydra from "./assets/hydra.png";
import finance from "./assets/finance.png";
import estoque from "./assets/controle-de-estoque.png";
import task from "./assets/task.png";

const projects = [
  {
    id: 1,
    title: "Finance AI",
    description:
      "Aplicativo para controle financeiro integrado com Inteligência Artificial para insights",
    img: finance,
  },
  {
    id: 2,
    title: "Task Manager",
    description:
      "Aplicativo full-stack para gerenciamento de tarefas em tempo real",
    img: task,
  },
  {
    id: 3,
    title: "Hydra Landing Page",
    description: "Landing Page responsiva com design chamativo e atraente",
    img: hydra,
  },
  {
    id: 4,
    title: "Stock Manager",
    description:
      "Sistema para controle de estoque, entradas, saídas, relatórios e sistema de cadastro",
    img: estoque,
  },
];

export const badges = [
  {
    projectId: 1,
    stack: ["Next.js", "Typescript", "OpenAI", "Clerk"],
  },
  {
    projectId: 2,
    stack: ["React", "Prisma", "Node.js", "PostgreSQL"],
  },
  {
    projectId: 3,
    stack: ["React", "Swiper.js", "Tailwind CSS"],
  },
  {
    projectId: 4,
    stack: ["Node.js", "EJS", "Express", "OAuth"],
  },
];

export default projects;
