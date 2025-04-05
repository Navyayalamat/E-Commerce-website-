import {  Link } from 'react-router-dom';
import './Card.scss';

const Card = (props) =>{
    return(
            <div className="card">
                <img src={props.productData.images[0]} className="display-img" alt="logo" />
                <p>{props.productData.title}</p>
                <p>${props.productData.price}</p>
                <Link to={"/products/" + props.productData.id}  state={{ data: props.productData }} > List </Link>
                <div className="bottom">
                    <h4>{props.productData.availabilityStatus}</h4>
                    <h4>{props.productData.warrantyInformation}</h4>
                </div>
            </div>
    )
}

export default Card