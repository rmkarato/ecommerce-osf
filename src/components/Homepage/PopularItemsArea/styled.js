import styled from "styled-components";

import { COLORS } from "../../../styles/Constants";

export const Container = styled.div`
    width: 100%;
    height: 1061px;
    
    background: ${COLORS.backgroundMenu};
    color: ${COLORS.textSecondary};

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const LoadMoreButton = styled.button`
    font-family: "Lato";
    width: 265px;
    height: 40px;
    border: 2px solid #ffffff;
    border-radius: 18px;
    color: ${COLORS.textSecondary};
    outline: none;
    cursor: pointer;
    background: transparent;
`;