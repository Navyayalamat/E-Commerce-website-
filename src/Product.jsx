import axios from "axios";
import { useEffect, useReducer, useState , useCallback} from "react";
import './Product.scss'
import Card from './Card'

 
const Product = () => {
    let initialState = {
        loading: false,
        data: null,
        error: false,
        categoryData: [],
        copyData: null
    }

  
    const fetchInitialState = 'initial State';
    const startState = 'start state';
    const errorState = 'error state';

    const dataReducer = (xyz, action) => {
       if(action.type === fetchInitialState){
        return {...xyz, loading : true, error: false}
       }
       else if(action.type === startState){
        return {...xyz,  loading: false , data: action.response , categoryData: action.response.products}
       }
       else if( action.type === errorState){
        return {...xyz, error: action.response}
       } 
       else if(action.type === 'filter'  ){
          xyz.copyData = xyz.data.products;
          return {...xyz, categoryData: xyz.copyData.filter((val)=> val.category === action.category)}
       }
    }


    const [maxRange, setMaxRange] = useState(6); 


    const loadMore = useCallback(() => {
        setMaxRange(prevRange => prevRange + 6);
    },[])

    const loadLess = useCallback(()=>{
        setMaxRange(6);
    }, [])

    const[xyz, dispatch] = useReducer(dataReducer,initialState)

    useEffect(()=> {
        getCustomersData();
    }, [])

    const filter = useCallback((cat)=>{
        dispatch({type: 'filter', category: cat});
   
    }, [])

   
     const getCustomersData = () => {
        dispatch({type: fetchInitialState });
        axios
            .get("https://dummyjson.com/products")
            .then(res => {  
                dispatch({type: startState,  response:res.data })
             }
            )
            .catch(error =>  dispatch({type: errorState, response: error }) );
    };
    
        return(
            <div className="listPage">
                <div>
                    <div className="products">
                        {xyz.loading && <p>loading </p>}
                        {xyz.categoryData?.length > 0 && xyz.categoryData.slice(0, maxRange).map((product, index)=>(
                            <Card key={index} productData={product}></Card>
                        ))}
                    </div>
                    {(xyz.categoryData?.length > 0 && maxRange+6 <= xyz.categoryData?.length) && <button className="load-button" onClick={loadMore}>Load More</button>}
                    {(xyz.categoryData?.length > 0 && maxRange === xyz.categoryData?.length) && <button className="load-button" onClick={loadLess}>Load less</button>}
                </div>
                <div className="filters">
                    <h3>Filters</h3>
                    <select className="select-tag" onClick={()=> filter('beauty')}>
                        <option onClick={()=> filter('beauty')} value="beauty">Beauty</option>
                        <option onClick={()=> filter('fragrances')} value="fragrances">Fragrances</option>
                    </select>
                    {/* <input onClick={()=> filter('beauty')} value="Beauty" type='checkbox'/>Beauty
                    <input onClick={()=> filter('fragrances')} value="Fragrances" type='checkbox'/>Fragrances */}
                </div>
            </div>
        )
}


export default Product