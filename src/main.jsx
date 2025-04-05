import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Product from './Product.jsx'
import {BrowserRouter} from "react-router-dom";
import ProductList from './ProductList.jsx'



createRoot(document.getElementById('root')).render(
      <BrowserRouter>
        <Header />
        <App />
     </BrowserRouter>
   
)
