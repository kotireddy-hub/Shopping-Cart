import React, { createContext, useState, useEffect } from 'react';
import { getProductsList } from '../services/productListApiCall';
export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {

    let [storeproducts, setProductsValue] = useState([]);
    
    useEffect(() => {
        if(!storeproducts.length) {
            getProductsList().then(response => {
                console.log(response.data);
                setProductsValue( response.data );
            })
        }   
    });

    return ( 
        <ProductsContext.Provider value={{storeproducts}} >
            { children }
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;