import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../styles/Constants";

import Button from "@material-ui/core/Button";

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

    &:hover {
      text-decoration: none;
      color: ${COLORS.textPrimary};
    }
`;

export const NavigationWrapper = styled.div`
  display: flex;

  text: ${COLORS.textPrimary};
`;

export const ButtonMaterial = styled(Button)`
  font-family: Lato;
  font-size: 14px; 
  color: ${COLORS.textPrimary};

  &:focus, &:hover, &:visited, &:link, &:active {
    background: ${COLORS.backgroundMenu};
    color: ${COLORS.textSecondary};
    border-bottom: 3px solid ${COLORS.borderMenu};
  }
`;

export const ButtonMaterialOpacity = styled(Button)`
  font-family: Lato;
  font-size: 14px; 
  color: ${COLORS.textPrimary};
  opacity: 0.5;
`;

export const IconsWrapper = styled.div`
  width: 213px;

  display: flex;
  justify-content: space-between;
`;

export const LanguageWrapper = styled.div`
  width: 122px;

  display: flex;
  justify-content: space-between;
`;

export const ArrowImage = styled.img`
  padding-left: 15px;
`;

export const ArrowServices = styled.img`
  padding-left: 30px;
`;