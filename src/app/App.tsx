import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ContactFormPage from "../pages/ContactFormPage";
import Navigation from '../widgets/Navigation';
import { ERoutesNames } from "../shared/utils/routes-name";
import Title from '../shared/ui/Title/Title';
import Footer from '../widgets/Footer';
import { BodyContainer } from '../shared/BodyContainer';


function App() {
 return (
  <>
   <ScopedCssBaseline>
      <BodyContainer>
        <Navigation />
        <Routes>
          <Route path={ERoutesNames.MAIN} element={<MainPage />} />
          <Route path={ERoutesNames.FORM} element={<ContactFormPage />} />
        </Routes>
        <Footer>
            <Title size="h4" style={{textAlign: 'center'}}>Some Company 2024</Title>
        </Footer>
      </BodyContainer>
   </ScopedCssBaseline>
 
  </>
 )
}

export default App;