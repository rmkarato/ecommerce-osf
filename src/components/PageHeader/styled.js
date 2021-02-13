import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 188px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
`;

export const NavigationWrapper = styled.div`
  display: flex;

  color: var(--color-text-in-primary);
`;