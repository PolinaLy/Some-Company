import styled from "styled-components";

export const FlexContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 420px) {
        justify-content: center;
    }
`

export const Item = styled.li`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 30%;
    min-width: 290px;
`

export const Paragraph = styled.p`
    font-family: "Inter";
    margin: 0;
    line-height: 1.3;
`