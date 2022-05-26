import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #272727;
`;

export const Linkslogin = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  width: 80px;
  transition: all 0.2s ease-in-out;
  margin-right: 20px;

  &:hover {
    color: #fddb3a;
  }
`;