import styled from "styled-components";

interface FooterProps {
    children ?: React.ReactNode,
}

const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 197px;
    padding: 30px 2% 30px 4%;
`

export default function Footer({children}: FooterProps) {

    return (
        <FooterContainer>{children}</FooterContainer>
    )

}