import styled from "styled-components";

interface BodyContainerProps {
    children: React.ReactNode,
}

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`
export function BodyContainer({children}: BodyContainerProps){
    return (
        <BodyWrapper>{children}</BodyWrapper>
    )
}