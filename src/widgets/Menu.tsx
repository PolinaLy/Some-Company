import styled from "styled-components";
import { Link } from "react-router-dom";
import { ERoutesNames } from "../shared/utils/routes-name";
import ButtonUi from "../shared/ui/Button/Button";

const MenuContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: auto;
    gap: 15px;

    @media (max-width: 420px) {
       margin-left: 0;
    }
`
export default function Menu() {
    return (
        <MenuContainer>
            <Link to={ERoutesNames.FORM}>
                <ButtonUi>
                    Contact us
                </ButtonUi>     
            </Link>
        </MenuContainer>
    )
}