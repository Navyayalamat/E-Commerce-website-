import './App.css'
import ProductList from './ProductList';
import Product from './Product';
import AddProduct from './AddProduct';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  
  return (
    <>
      <div>
            <Routes class="menu">
                <Route path="/"  />
                <Route path="products" element={<Product />}/>
                <Route path="/products/:id" element={<ProductList />} />
                <Route path="add" element={<AddProduct/>}/>
            </Routes>
        
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      
    </>
  )
}

export default App
