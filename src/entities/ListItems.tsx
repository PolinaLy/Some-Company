import List from '@mui/material/List';
import { Item } from '../app/StyledGeneralComponents';
import Title from '../shared/ui/Title/Title';
import { Paragraph } from '../app/StyledGeneralComponents';

export default function ListItems() {
  return (
      <List sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: '105px', marginTop: '90px', marginBottom: '60px'}}>
        <Item><Title size="h4" style={{margin: '0 0 7px 0'}}>Title</Title>
            <Paragraph style={{color: '#757575'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                         Aliquam mattis, leo et condimentum
            </Paragraph>
        </Item>
        <Item><Title size="h4" style={{margin: '0 0 7px 0'}}>Title</Title>
            <Paragraph style={{color: '#757575'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                         Aliquam mattis, leo et condimentum
            </Paragraph>
        </Item>
        <Item><Title size="h4" style={{margin: '0 0 7px 0'}}>Title</Title>
            <Paragraph style={{color: '#757575'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                         Aliquam mattis, leo et condimentum
            </Paragraph>
        </Item>
        <Item><Title size="h4" style={{margin: '0 0 7px 0'}}>Title</Title>
            <Paragraph style={{color: '#757575'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                         Aliquam mattis, leo et condimentum
            </Paragraph>
        </Item>
        <Item><Title size="h4" style={{margin: '0 0 7px 0'}}>Title</Title>
            <Paragraph style={{color: '#757575'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                         Aliquam mattis, leo et condimentum
            </Paragraph>
        </Item>
        <Item><Title size="h4" style={{margin: '0 0 7px 0'}}>Title</Title>
            <Paragraph style={{color: '#757575'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                         Aliquam mattis, leo et condimentum
            </Paragraph>
        </Item>
      </List>
  )
}