import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../styles/Constants";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 75px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  border-bottom: 2px solid #E8E2D6;
`;

export const LinkTo = styled(Link)`
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
      color: ${COLORS.textPrimary};
    }
`;

export const NavigationWrapper = styled.div`
  display: flex;

  text: ${COLORS.textPrimary};
`;
