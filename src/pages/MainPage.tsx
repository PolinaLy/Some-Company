import { FlexContainer, Paragraph } from "../app/StyledGeneralComponents";
import Title from "../shared/ui/Title/Title";
import Section from "../shared/ui/Section/Section";
import ListItems from "../entities/ListItems";
import ButtonUi from "../shared/ui/Button/Button";
import { Link } from "react-router-dom";
import { ERoutesNames } from "../shared/utils/routes-name";

export default function MainPage() {
    return (
        <>
            <Title size="h1" className="visuallyhidden">About some company</Title>
            <Section bgColor="#F5F5F5">
                <div style={{paddingBottom: '40px'}}>
                    <FlexContainer>  
                        <div style={{maxWidth: '450px'}}>
                        <Title size="h2" style={{margin: '0 0 20px 0'}}>Most important <br />title on the page</Title>
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aliquam mattis, leo et condimentum ultricies, sem urna
                            convallis metus, vel suscipit nibh lacus tincidunt ante
                        </Paragraph>
                        </div>
                        <iframe width="540" height="235" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=F4bUdWrW0ua3Ixkq" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </FlexContainer>
                </div>
            </Section>
            <Section bgColor="#FFFFFF">
                <div style={{padding: '0 1.5vw'}}>
                <Title size="h2" style={{textAlign: 'center', margin: '20px 0 30px 0'}}>Also very important title</Title>
                <ListItems />
                <Link to={ERoutesNames.FORM}>
                    <ButtonUi style={{margin: '0 auto'}}>
                        Contact us
                    </ButtonUi>   
                </ Link>
                </div>
                
            </Section>
            <Section bgColor="#F5F5F5" className="border-bottom border-top" style={{paddingTop: '60px'}}>
                <Title size="h3" style={{textAlign: 'center', margin: '20px 0 30px 0'}}>Less important title</Title>
                <Link to={ERoutesNames.FORM}>
                    <ButtonUi style={{margin: '0 auto'}}>
                        Contact us
                    </ButtonUi>   
                </ Link>
            </Section>            
        </>
    )
}