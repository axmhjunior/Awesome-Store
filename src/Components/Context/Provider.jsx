import React, { useState } from 'react';
import { AppContext } from './AppContext';
import  propTypes from 'prop-types';

function Provider({children}){
    
    const [product, setProduct]= useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [isVisible, setIsVisible] = useState(0);
    const [filter, setFilter] = useState('All Products');
    const [cartValue, setCartValue] = useState();
    
    const value = {
        product, 
        setProduct,
        cartItems, 
        setCartItems,
        isVisible, 
        setIsVisible,
        filter, 
        setFilter,
        cartValue, 
        setCartValue
    };

    return(
    <AppContext.Provider value={  value  }>
        {children}
    </AppContext.Provider>
);
}

export default Provider;

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;
