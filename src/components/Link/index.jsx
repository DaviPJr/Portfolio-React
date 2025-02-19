import styled from "styled-components";

import { PiGithubLogo } from "react-icons/pi";
import { GoShareAndroid } from "react-icons/go";

const LinkContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const LinkEstilizado = styled.a`
  color: #d1d5db;
`;

const Link = () => {
  return (
    <LinkContainer>
      <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <PiGithubLogo color="#d1d5db" size={25} />
        <LinkEstilizado href="">Código</LinkEstilizado>
      </div>

      <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <GoShareAndroid color="#d1d5db" size={25} />
        <LinkEstilizado href="">Demo</LinkEstilizado>
      </div>
    </LinkContainer>
  );
};

export default Link;
