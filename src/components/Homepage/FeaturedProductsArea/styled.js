import styled from "styled-components";

import { COLORS } from "../../../styles/Constants";

export const Container = styled.div`
    width: 100%;
    height: 445px;

    background: ${COLORS.backgroundMenu};
    color: ${COLORS.textSecondary};
    
    display: flex;
    justify-content: center;
    align-items: center;
`;