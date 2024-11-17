import styled from "styled-components"

const titleStyle = `
    margin: 0;
    font-family: "Inter";
    font-size: 48px;
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.2;

    @media (max-width: 800px) {
        font-size: 32px;
    }
`

const titleStyleBig = `
    font-size: 72px;

    @media (max-width: 800px) {
        font-size: 48px;
    }
`

const titleStyleSmall = `
    font-size: 24px;
    font-weight: 600;

    @media (max-width: 800px) {
        font-size: 20px;
    }
`

export const TitleH1 = styled.h1`${titleStyle}`;
export const TitleH1Big = styled.h1`${titleStyle}${titleStyleBig}`;
export const TitleH2 = styled.h2`${titleStyle}`;
export const TitleH3 = styled.h2`${titleStyle}`;
export const TitleH4 = styled.h3`${titleStyle}${titleStyleSmall}`;