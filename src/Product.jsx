import axios from "axios";
import { useEffect, useReducer, useState , useCallback} from "react";
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

    const dataReducer = (xyz, action) => {
       if(action.type === fetchInitialState){
        console.log("final action")
        console.log(action.type , action.response)

        return {...xyz, loading : true, error: false}
       }
       else if(action.type === startState){
        console.log(action.type , action.response)
        return {...xyz,  loading: false , data: action.response}
       }
       else if( action.type === errorState){
        console.log(action.type , action.response)

        return {...xyz, error: action.response}
       }
    }


    const [maxRange, setMaxRange] = useState(6); 

    const loadMore = useCallback(() => {
        setMaxRange(prevRange => prevRange + 6);
    },[])
    const[xyz, dispatch] = useReducer(dataReducer,initialState) 
    useEffect( ()=> {
        getCustomersData();
    }, [])

     const getCustomersData = () => {
        dispatch({type: fetchInitialState });
        axios
            .get("https://dummyjson.com/products")
            .then(res => {  
                // setProductsData(data.data.products)
                dispatch({type: startState,  response:res.data })
             }
            )
            .catch(error =>  dispatch({type: errorState, response: error }) );
    };
    
        return(
            <div className="products">
                {xyz.loading && <p>loading </p>}
                {xyz.data?.products.length > 0 && xyz.data.products.slice(0, maxRange).map((product, index)=>(
                    <Card key={index} productData={product}></Card>
                ))}
                {xyz.data?.products.length > 0 && <button onClick={loadMore}>Load More</button>}
            </div>
        )
}


export default Product