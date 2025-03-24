import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import './Product.scss'
import Card from './Card'

 
const Product = () => {
    let initialState = {
        loading: false,
        data: null,
        error: false
    }
    const fetchInitialState = 'initial State';
    const startState = 'start state';
    const errorState = 'error state';

    const dataReducer = (state, action) => {
        debugger
       if(action.type === fetchInitialState){
        return {...state, loading : true, error: false}
       }
       else if(action.type === startState){
        return {...state,  loading: false , data: action.response}
       }
       else if( action.type === errorState){
        return {...state, error: action.response}
       }
    }


    const [productsData, setProductsData] = useState([]);
    const[state, dispatch] = useReducer(dataReducer,initialState) 
    // useEffect( ()=> {
    //     getCustomersData();
    // }, [])

     const getCustomersData = () => {
        debugger
        dispatch({type: fetchInitialState });
        axios
            .get("https://dummyjson.com/products")
            .then(data => {  
                console.log("data.data.products", data)
                // setProductsData(data.data.products)
                dispatch({type: startState, response:data.data.products })
                console.log("state", state)
             }
            )
            .catch(error =>  dispatch({type: errorState, response: error }) );
    };
    
    getCustomersData();
        return(
            <div>
                <i className="fa fa-spinner fa-spin"></i>
                <div className="products">
                    {productsData?.length > 0 && productsData.map(((product, index) => 
                        (<Card  key={index} productData={product}/>)
                    ))}
                </div>
            </div>
        )
}


export default Product