import {useLocation} from 'react-router-dom';

const ProductList = () => {
    const location = useLocation()
    
   
    return <div>
        <h1>Overview Page</h1>;
        {/* <p>Availability Status: {userData.availabilityStatus}</p> */}
    </div>

}

export default ProductList