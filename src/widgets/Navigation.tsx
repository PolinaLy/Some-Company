import styled from "styled-components";
import { FlexContainer } from "../app/StyledGeneralComponents";
import Logo from "./Logo";
import Menu from "./Menu";

const NavigationContainer = styled.nav `
    display: flex;
`

const NavigationWrapper = styled.div `
    width: 100vw;
    padding: 28px 6% 28px 2%;
    box-sizing: border-box;
`


export default function Navigation() {
    return (
        <NavigationContainer className="border-bottom">
            <NavigationWrapper>
                <FlexContainer>
                   <Logo>Some Company</Logo>
                    <Menu />
                </FlexContainer>  
            </NavigationWrapper>
        </NavigationContainer>

        
    )
}