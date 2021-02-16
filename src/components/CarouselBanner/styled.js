import styled from "styled-components";

import { COLORS } from "../../styles/Constants";

export const Container = styled.div`
    width: 100%;
    height: 560px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TextWrapper = styled.div`
    position: absolute;
    left: 60px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: ${COLORS.textSecondary};
    font-family: "Lato";
`;

export const ViewMoreButton = styled.button`
    font-family: "Lato";
    width: 147px;
    height: 36px;
    border: 2px solid #ffffff;
    border-radius: 18px;
    background-color: #1e1d22;
    opacity: 0.5;
    color: ${COLORS.textSecondary};
    outline: none;
    cursor: pointer;
`;