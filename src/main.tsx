import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import { store } from './app/model/store.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/Some-Company'>
    <StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
    </StrictMode>
  </BrowserRouter>
  
)
