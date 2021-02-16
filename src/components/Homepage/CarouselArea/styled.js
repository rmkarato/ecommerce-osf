import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 560px;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LeftWrapper = styled.div`
    width: 870px;
    padding-right: 15px;
    position: relative;

    display: flex;
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
`;

export const RightWrapper = styled.div`
    width: 270px;
    padding-left: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;