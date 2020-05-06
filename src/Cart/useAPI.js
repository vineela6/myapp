import React,{useEffect,useReducer} from 'react';
import reducer from './reducer'

const useAPI=() =>{
    const INITIAL_STATE = {
        productsData: [],
        totalAmount: 0
    }
    
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    const incrementCounter = (index) => {
        dispatch({ type: 'INC_COUNTER', payload: { index } })
    }
    const decrmentCounter = (index) => {
        dispatch({ type: 'DEC_COUNTER', payload: { index } })
    }
    const removeProduct = (index) => {
        dispatch({ type: 'REMOVE_PRODUCT', payload: { index } })
    }

    useEffect(() => {
        fetch('https://jsonblob.com/api/8f51a8de-8dd7-11ea-82f0-f5d885d3ad80').then(response => response.json()).then(json => {
            dispatch({ type: 'API_SUCCESS', payload: { productsData: [...json] } })
        })
    }, []);

    useEffect((prevState) => {
        dispatch({ type: 'SET_TOTAL_AMOUNT' })
    }, [state.productsData]);
    return{
        state,
        incrementCounter,
        decrmentCounter,
        removeProduct
    }
    
}

export default useAPI
