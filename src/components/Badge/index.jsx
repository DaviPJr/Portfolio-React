/* eslint-disable react/prop-types */
import styled from "styled-components";

const BadgeContainer = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: rgba(209, 213, 219, 0.2);
  color: #d1d5db; /* Cor do texto */
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  margin-right: 8px;
  margin-bottom: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(209, 213, 219, 0.3);
  }
`;

const Badge = ({ stack }) => {
  return <BadgeContainer>{stack}</BadgeContainer>;
};

export default Badge;
