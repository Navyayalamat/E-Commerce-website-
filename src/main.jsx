import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Product from './Product.jsx'
import {BrowserRouter} from "react-router-dom";



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <App />
      <Header />
      <Product />
  </BrowserRouter>
   
  </StrictMode>,
)
