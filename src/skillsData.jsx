import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import node from "./assets/image.png";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoFigma } from "react-icons/bi";
import { SiGit } from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    icon: <BiLogoJavascript />,
    descricao: "Desenvolvimento de aplicações web interativas e dinâmicas.",
    level: "90%",
  },
  {
    name: "React",
    icon: <BiLogoReact />,
    descricao: "Criação de interfaces de usuário modernas e reativas.",
    level: "85%",
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript />,
    descricao: "Desenvolvimento seguro e escalável com tipagem estática.",
    level: "80%",
  },
  {
    name: "Node.js",
    icon: node,
    descricao: "Construção de APIs e aplicações backend eficientes.",
    level: "75%",
  },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql />,
    descricao: "Gerenciamento de bancos de dados relacionais robustos.",
    level: "70%",
  },
  {
    name: "HTML",
    icon: <BiLogoHtml5 />,
    descricao: "Estruturação semântica e acessível de páginas web.",
    level: "95%",
  },
  {
    name: "Tailwind CSS",
    icon: <BiLogoTailwindCss />,
    descricao: "Estilização rápida e responsiva com utilitários CSS.",
    level: "85%",
  },
  {
    name: "Figma",
    icon: <BiLogoFigma />,
    descricao: "Design de interfaces e prototipagem colaborativa.",
    level: "80%",
  },
  {
    name: "Git",
    icon: <SiGit />,
    descricao: "Controle de versão e colaboração em projetos de software.",
    level: "90%",
  },
];

export default skills;
