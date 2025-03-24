import {useLocation} from 'react-router-dom';
import {  Link } from 'react-router-dom';


const Card = (props) =>{
    const location = useLocation();
    // console.log(" location.state",  props.productData);

    return(
        
            
            <div className="card">
                <div>
                    <img src={props.productData.images[0]} className="display-img" alt="logo" />
                    <h3>{props.productData.title}</h3>
                    <p>{props.productData.description}</p>
                    <h3>{props.productData.price}</h3>
                    <Link to={"/list"} state={{ data: props.productData }} > List </Link>
                    <div className="bottom">
                        <h4>{props.productData.availabilityStatus}</h4>
                        <h4>{props.productData.warrantyInformation}</h4>
                    </div>
                </div>
            </div>
          
        
      
          
       
    )
}

export default Card