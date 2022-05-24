import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 720px;
  margin: 0 auto;
`;

export const Linkslogin = styled(Link)`
  font-size: 20px;
  color: #777;
  text-decoration: none;
`;
