
import {useState} from "react";

const AddProduct = () =>{
    let initialProduct = {
        "id": 1,
        "title": "",
        "description": "",
        "category": "",
        "price": null,
        "discountPercentage": null,
        "rating": null,
        "brand": "",
        "availabilityStatus": "",
        "minimumOrderQuantity": null,
        "images": [],
    }
    const [product , setProduct] = useState(initialProduct);

    return <div>
        <h1> Add New Product</h1>
        <input type='text'></input>
    </div>
}
export default AddProduct