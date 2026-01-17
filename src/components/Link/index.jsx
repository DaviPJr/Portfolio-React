import styled from "styled-components";

import { PiGithubLogo } from "react-icons/pi";
import { GoShareAndroid } from "react-icons/go";

const LinkContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
`;

const LinkEstilizado = styled.a`
  color: #d1d5db;
  display: inline-flex;
  align-items: center;
  gap: 5px;
`;

const Link = () => (
  <LinkContainer>
    <LinkEstilizado href="">
      <PiGithubLogo color="#d1d5db" size={22} /> Código
    </LinkEstilizado>
    <LinkEstilizado href="">
      <GoShareAndroid color="#d1d5db" size={22} /> Demo
    </LinkEstilizado>
  </LinkContainer>
);


export default Link;
