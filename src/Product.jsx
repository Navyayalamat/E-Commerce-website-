import axios from "axios";
import { useState } from "react";
import './Product.scss'
import Card from './Card'


const Product = () => {
    const [productsData, setProductsData] = useState([]);
     const getCustomersData = () => {
        axios
            .get("https://dummyjson.com/products")
            .then(data => { console.log("sdsdsd",data) 
                setProductsData(data.data.products)})
            .catch(error => console.log(error));
    };

    getCustomersData();
        return(
            <div className="products">
              {productsData?.length > 0 && productsData.map(((product, index) => 
                  (<Card  key={index} productData={product}/>)
              ))}
            </div>
        )
}


export default Product