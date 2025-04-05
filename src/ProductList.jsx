import {useLocation} from 'react-router-dom';
import {  Link } from 'react-router-dom';
import './ProductList.scss'
import Rating from '@mui/material/Rating';

const ProductList = () => {
    const location = useLocation();
    const data = location.state.data
    console.log("data", data)
    return <div>
        <Link to={"/products"} className='back-button' > Back </Link>
        <h1>{data.title}</h1>;
        <div className='product-description'>
            <div> <img src={data.images[0]} className="display-img" alt="logo" /></div>
            <div className='description'>
                <Rating
                    name="simple-uncontrolled"
                    defaultValue={data.rating}
                />
                <div><b>Description:</b> {data.description}</div>
                <div><b>Discount Percentage:</b> {data.discountPercentage}%</div>
                <div><b>Minimum Order Quantity:</b> {data.minimumOrderQuantity}</div>
                <h1>${data.price}</h1>

            </div>
          
        </div>
        
    </div>
}

export default ProductList