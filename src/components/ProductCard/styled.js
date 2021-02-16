import styled from "styled-components";

import { COLORS } from "../../styles/Constants";

export const Container = styled.div`
  width: 1170px;
  height: 760px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const ProductWrapper = styled.div`
  width: 271px;
  height: 365px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  width: 271px;
  height: 105px;
  background: ${COLORS.background};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  color: ${COLORS.textPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;