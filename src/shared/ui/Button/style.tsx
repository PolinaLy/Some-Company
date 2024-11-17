import styled from "styled-components";

const styleUiConteiner = `
    display: block;
    min-width: 150px;
    width: fit-content;
    padding: 4px 3.8vw 3px 3.8vw;
    border: 0;
    border-radius: 7px;
    background-color: #2C2C2C;
    color: #FFFFFF;
    box-sizing: border-box;
    text-align: center;
    font-family: "Inter";
`

export const ButtonContainer = styled.button`${styleUiConteiner}`;
export const SpanContainer = styled.span`${styleUiConteiner}`;