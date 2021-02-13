import styled from "styled-components";

import { COLORS } from "../../../styles/Constants";

export const Container = styled.div`
    width: 100%;
    height: 198px;

    background: ${COLORS.backgroundTerciary};
    color: ${COLORS.textSecondary};
    
    display: flex;
    justify-content: center;
    align-items: center;
`;