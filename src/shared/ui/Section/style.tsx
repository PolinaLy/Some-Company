import styled from "styled-components";

export const SectionContainer = styled.section `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    width: 100vw;
    padding: 30px 2% 45px 4%;
    box-sizing: border-box;

    @media (max-width: 800px) {
    padding: 5%;
    }
`